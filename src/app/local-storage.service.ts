import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class LocalStorageService {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    public getItem(key: string) {
        if (isPlatformBrowser(this.platformId)) {
            return localStorage.getItem(key);
        }
    }

    public setItem(key: string, value: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(key, value);
        }
    }

    public removeItem(key: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem(key);
        }
    }

    public getJson(key: string) {
        if (isPlatformBrowser(this.platformId)) {
            try {
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value) : undefined;
            } catch {
                return undefined;
            }
        } else {
            return undefined;
        }
    }

    public setJson(key: string, value: any) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    }
}
