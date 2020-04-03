const WebSocket = require('isomorphic-ws');

export type ServiceId = string;

type MessageId = string;
type WebSocketMessage = string | Blob | ArrayBufferView | ArrayBuffer | SharedArrayBuffer;

const isDev = false;

let globalWebSocket: GlobalWebSocketHandler;
let id = 1;

export function setupGlobalWebSocket() {
    const url = isDev ? 'ws://192.168.0.34:3000' : 'wss://api.sidequestvr.com';
    globalWebSocket = new GlobalWebSocketHandler(url);
}

export function getGlobalWebSocket() {
    return globalWebSocket;
}

export function getNextServiceId(): ServiceId {
    id++;
    return String(id);
}

export interface WebSocketLike {
    onopen: (this: ProxyWebSocket, ev: Event) => any;
    onclose: (this: ProxyWebSocket, ev: Event /* CloseEvent */) => any;
    onmessage: (this: ProxyWebSocket, ev: MessageEvent) => any;
    onerror: (this: ProxyWebSocket, ev: Event) => any;

    send(message: WebSocketMessage): void;
    close(_code?: number, _reason?: string): void;
}

class ProxyWebSocket implements WebSocketLike {
    public onopen: (this: ProxyWebSocket, ev: Event) => any;
    public onclose: (this: ProxyWebSocket, ev: Event /* CloseEvent */) => any;
    public onmessage: (this: ProxyWebSocket, ev: MessageEvent) => any;
    public onerror: (this: ProxyWebSocket, ev: Event) => any;

    constructor(private handler: GlobalWebSocketHandler, private serviceId: ServiceId) {}

    send(message: WebSocketMessage): void {
        this.handler.send(this.serviceId, message);
    }

    close(_code?: number, _reason?: string): void {
        this.handler.destroyWebSocket(this.serviceId);
    }
}

export class GlobalWebSocketHandler {
    private ws: WebSocket;
    private isOpen = false;
    private pendingSends: WebSocketMessage[] = [];
    private proxies: Record<ServiceId, ProxyWebSocket> = {};
    private messages: Record<MessageId, ServiceId> = {};

    constructor(private url: string) {
        this.setupWebSocket();
        setInterval(() => this.keepAlive(), 10 * 1000);
    }

    public createWebSocket(serviceId: ServiceId): ProxyWebSocket {
        const proxy = new ProxyWebSocket(this, serviceId);
        this.proxies[serviceId] = proxy;
        setTimeout(() => {
            if (proxy.onopen && proxy.onopen.call) {
                proxy.onopen(new Event('TODO'));
            }
        }, 0);
        return proxy;
    }

    public destroyWebSocket(serviceId: ServiceId) {
        const proxy = this.proxies[serviceId];
        if (proxy && proxy.onclose && proxy.onclose.call) {
            proxy.onclose(new Event('TOOD'));
        }
        delete this.proxies[serviceId];
    }

    public send(serviceId: ServiceId, message: WebSocketMessage) {
        const messageId = this.parseMessageIdFromMessage(message);
        this.messages[messageId] = serviceId;
        if (this.isOpen) {
            this.ws.send(message);
        } else {
            this.pendingSends.push(message);
        }
    }

    private parseMessageIdFromMessage(message: WebSocketMessage): MessageId {
        const data = JSON.parse(message as string);
        const messageId = `${data.path}${data.time}`;
        return messageId;
    }

    private setupWebSocket() {
        this.ws = new WebSocket(this.url);
        this.ws.onopen = evt => this.onOpen(evt);
        this.ws.onclose = evt => this.onClose(evt);
        this.ws.onmessage = evt => this.onMessage(evt);
        this.ws.onerror = evt => console.error(evt);
    }

    private keepAlive() {
        const path = 'keep-alive';
        const data = {};
        const token = undefined;
        const time = '-' + new Date().getTime();
        this.ws.send(JSON.stringify({ path, data, token, time }));
    }

    private onOpen(evt: Event) {
        this.isOpen = true;
        this.pendingSends.forEach(data => this.ws.send(data));
        this.pendingSends.length = 0;
    }

    private onClose(evt: Event) {
        this.ws = null;
        this.isOpen = false;
        this.setupWebSocket();
    }

    private onMessage(event: MessageEvent) {
        const response = this.parseResponseData(event.data);
        if (!response) return;
        const messageId = this.parseResponseMessageId(response);
        const serviceId = this.messages[messageId];
        delete this.messages[messageId];
        const proxy = this.proxies[serviceId];
        if (proxy && proxy.onmessage && proxy.onmessage.call) {
            proxy.onmessage(event);
        }
    }

    private parseResponseData(dataString: string) {
        try {
            return JSON.parse(dataString);
        } catch (e) {
            console.warn(e);
        }
    }

    private parseResponseMessageId(response): MessageId {
        const messageId = response.path;
        if (messageId.substr(messageId.length - 4, 4) === '-err') {
            return messageId.substr(0, messageId.length - 4);
        } else {
            return messageId;
        }
    }
}
