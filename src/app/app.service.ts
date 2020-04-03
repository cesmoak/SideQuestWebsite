import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { MzModalComponent, MzToastService } from 'ngx-materialize';
import { ExpanseClientService } from './expanse-client.service';
import { Subject } from 'rxjs';
import { AccountComponent, AppListing } from './account/account.component';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { LocalStorageService } from './local-storage.service';

interface Notifications {
    friend_requests: any[];
    unread_messages: any[];
}

type AppID = number;
type PackageName = string;
type AppIndex = Record<AppID, PackageName>;

interface AppMeta {
    [appId: number]: {
        v: number; // view
        ct: number; // click-through
        d: number; // download
        l: number; // like
        vc: number | null; // version code
    };
}

interface EventMeta {
    [eventId: number]: {
        v: number; // view
        ct: number; // click-through
        a: number; // attending
        l: number; // like
    };
}

interface SpaceMeta {
    [spaceId: number]: {
        v: number; // view
        ct: number; // click-through
        a: number; // attending
        l: number; // like
    };
}

@Injectable({
    providedIn: 'root',
})
export class AppService {
    public hideLogo: boolean;
    public scrollContainer: HTMLElement;

    private _isAuthenticated = false;

    public get isAuthenticated() {
        return this._isAuthenticated;
    }
    public set isAuthenticated(value: boolean) {
        if (value === this._isAuthenticated) return;
        this._isAuthenticated = value;
        this.authenticationStatus.next(this._isAuthenticated);
    }

    public currentUrl: string;
    public space_meta: SpaceMeta;
    public event_meta: EventMeta;
    public app_meta: AppMeta;
    public app_index: AppIndex;
    public sidequestUrl: string;
    public urlTimeout: any;
    public urlTimeoutValue: number;
    public confirmOpen: MzModalComponent;
    public accountComponent: AccountComponent;
    public notifications: Notifications = { friend_requests: [], unread_messages: [] };
    public readonly siteKey = '6LfrRrcUAAAAAE00oWA60iMK5AeM7luMlKWevTlY';
    public badge: 'bottomright' | 'bottomleft' | 'inline' = 'inline';
    public type: 'image' | 'audio' = 'image';
    public theme: 'light' | 'dark' = 'dark';
    public authenticationStatus = new Subject<boolean>();

    public get isEmbedded() {
        return this.hideLogo;
    }

    private urlConfirmDelay = 30; // in seconds
    private sidequestResolve: any;
    private sidequestReject: any;

    constructor(
        private toastService: MzToastService,
        private localStorage: LocalStorageService,
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(DOCUMENT) private document: Document
    ) {
        if (isPlatformBrowser(this.platformId)) {
            const userAgent = (navigator as any).userAgent.toLowerCase();
            if (userAgent.indexOf(' electron/') > -1) {
                this.hideLogo = true;
            }
        }
        this.loadAppIndex();
        this.loadAppMeta();
        this.saveAppMeta();
    }
    public setAccountComponent(accountComponent: AccountComponent) {
        this.accountComponent = accountComponent;
    }

    public async getNotifications(expanseService: ExpanseClientService) {
        await expanseService.start();
        try {
            this.notifications = await expanseService.getNotifications();
        } catch {
            this.notifications = { friend_requests: [], unread_messages: [] };
        }
    }

    public scrollToTop() {
        this.scrollTo(0);
    }

    private scrollTo(pos) {
        this.document.body.scrollTo(0, pos);
    }

    public remoteInstall(data) {
        let customUrl;
        if (data.app_urls.length) {
            let _apps = JSON.stringify(data.app_urls.map(l => l.link_url.trim()));
            if (data.app_categories_id === '4' && data.website === 'FirefoxSkybox') {
                customUrl = 'sidequest://firefox-skybox/#' + _apps;
            } else if (data.app_categories_id === '4' && data.website === 'SynthRiders') {
                customUrl = 'sidequest://synthriders-multi/#' + _apps;
            } else if (data.app_categories_id === '4' && data.website === 'BeatOn') {
                customUrl = 'sidequest://bsaber-multi/#' + _apps;
            } else {
                customUrl = 'sidequest://sideload-multi/#' + _apps;
            }
            if (customUrl) {
                this.openSidequestUrl(customUrl);
            }
        }
    }

    public async fixImages(result, size?) {
        const items = result && result.length ? result : [];
        await Promise.all(
            items.map(async d => {
                const img = new Image();
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                    img.src = (d.image_url || d.event_image || d.image) + (size ? '?size=' + size : '');
                }).catch(e => {
                    d.image_url = null;
                    d.event_image = null;
                    d.image = null;
                });
            })
        );
    }

    public logout(expanseService) {
        this.localStorage.removeItem('session' + expanseService.storageKey);
        expanseService.currentSession = null;
        this.isAuthenticated = false;
    }

    public showMessage(res: any, message: string) {
        if (res.error) {
            this.toastService.show(res.data, 10000, 'orange', () => {});
        } else {
            this.toastService.show(message, 3000, 'green', () => {});
        }
    }

    public getSpaceMeta(spaces_id) {
        if (!this.space_meta[spaces_id]) {
            this.space_meta[spaces_id] = {
                v: 0,
                ct: 0,
                a: 0,
                l: 0,
            };
        }
        return this.space_meta[spaces_id];
    }

    public getEventMeta(events_id) {
        if (!this.event_meta[events_id]) {
            this.event_meta[events_id] = {
                v: 0,
                ct: 0,
                a: 0,
                l: 0,
            };
        }
        return this.event_meta[events_id];
    }

    public getAppMeta(apps_id) {
        if (!this.app_meta[apps_id]) {
            this.app_meta[apps_id] = {
                v: 0,
                ct: 0,
                d: 0,
                l: 0,
                vc: null,
            };
        }
        return this.app_meta[apps_id];
    }

    private loadAppIndex() {
        this.app_index = this.localStorage.getJson('app_index') || {};
    }

    private loadAppMeta() {
        this.app_meta = this.localStorage.getJson('app_meta') || {};
        this.event_meta = this.localStorage.getJson('event_meta') || {};
        this.space_meta = this.localStorage.getJson('space_meta') || {};
    }

    public saveAppMeta() {
        this.localStorage.setJson('space_meta', this.space_meta);
        this.localStorage.setJson('event_meta', this.event_meta);
        this.localStorage.setJson('app_meta', this.app_meta);
        this.localStorage.setJson('app_index', this.app_index);
    }

    public retrySidequestUrl() {
        if (this.sidequestUrl) {
            (window as any).location = this.sidequestUrl;
        }
    }

    public cancelSidequestUrl() {
        this.clearUrlTimeout();
        if (this.sidequestReject) {
            this.sidequestReject();
        }
    }

    public confirmSidequestUrl() {
        this.clearUrlTimeout();
        if (this.sidequestResolve) {
            this.sidequestResolve();
        }
    }

    public clearUrlTimeout() {
        clearTimeout(this.urlTimeout);
        this.urlTimeoutValue = 0;
    }

    private startUrlTimer() {
        this.urlTimeout = setTimeout(() => {
            this.urlTimeoutValue--;
            if (this.urlTimeoutValue > 0) {
                this.startUrlTimer();
            } else {
                this.confirmOpen.closeModal();
                this.confirmSidequestUrl();
            }
        }, 1000);
    }

    public openLink(url: string) {
        window.location.href = url;
    }
    public openSidequestUrl(url) {
        this.sidequestUrl = url;
        this.retrySidequestUrl();
        if (this.hideLogo) {
            return Promise.resolve();
        }
        this.urlTimeoutValue = this.urlConfirmDelay;
        this.startUrlTimer();
        this.confirmOpen.openModal();
        return new Promise<void>((resolve, reject) => {
            this.sidequestResolve = resolve;
            this.sidequestReject = reject;
        });
    }

    public copyUrl(url) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(url).then(
                () => {
                    this.showMessage({ error: false }, 'Copied to clipboard!');
                },
                err => {
                    this.showMessage({ error: true, data: "Can't copy!" }, '');
                }
            );
        }
    }

    public refreshShareLink(expanseService: ExpanseClientService, type, id, name, description, image, external) {
        return fetch('https://sdq.st/delete-link/' + expanseService.currentSession.token + '/' + type + '-' + id, {
            method: 'GET',
            cache: 'no-cache',
        })
            .then(() =>
                fetch('https://sdq.st/get-link/' + expanseService.currentSession.token, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: name,
                        description: description,
                        image: image,
                        name: type + '-' + id,
                        external: external,
                    }),
                })
            )
            .then(r => r.json());
    }

    public appParamName(app: AppListing) {
        return app.name.replace(/[^a-z0-9 -]/gim, '').replace(/\s/gim, '-');
    }
}
