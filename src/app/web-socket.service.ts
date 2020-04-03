import { Inject, PLATFORM_ID, OnDestroy, Injectable } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { getNextServiceId, getGlobalWebSocket, ServiceId, WebSocketLike } from './global-web-socket-handler';

const WebSocket = require('isomorphic-ws');

@Injectable({
    providedIn: 'root',
})
export class WebSocketService implements OnDestroy {
    private id: ServiceId;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) {
        this.id = getNextServiceId();
    }

    public createWebSocket(url: string): WebSocketLike {
        if (isPlatformBrowser(this.platformId)) {
            return new WebSocket(url);
        } else {
            return getGlobalWebSocket().createWebSocket(this.id);
        }
    }

    ngOnDestroy() {
        if (isPlatformServer(this.platformId)) {
            return getGlobalWebSocket().destroyWebSocket(this.id);
        }
    }
}
