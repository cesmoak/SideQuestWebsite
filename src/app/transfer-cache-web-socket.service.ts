import { Injectable, ApplicationRef } from '@angular/core';
import { TransferState, StateKey, makeStateKey } from '@angular/platform-browser';
import { filter, take } from 'rxjs/operators';

const debug = false;

@Injectable({
    providedIn: 'root',
})
export class TransferCacheWebSocketService {
    private isCacheActive = true;
    private messageCache = {};

    constructor(appRef: ApplicationRef, private transferState: TransferState) {
        appRef.isStable
            .pipe(
                filter((isStable: boolean) => isStable),
                take(1)
            )
            .toPromise()
            .then(() => {
                this.isCacheActive = false;
            });
    }

    public stopUsingCache() {
        this.isCacheActive = false;
    }

    public lookupResponse(cacheId: string): any | undefined {
        if (this.isCacheActive) {
            const storeKey = this.makeResponseCacheKey(cacheId);
            if (this.transferState.hasKey(storeKey)) {
                this.debug('using cached response', cacheId);
                return this.transferState.get(storeKey, {});
            }
        }
    }

    public cacheMessageId(cacheId: string, messageId: string) {
        if (this.isCacheActive) {
            this.debug('setting cacheId', messageId, cacheId);
            this.messageCache[messageId] = cacheId;
        }
    }

    public cacheResponse(messageId: string, data: any) {
        if (this.isCacheActive) {
            const cacheId = this.messageCache[messageId];
            if (cacheId) {
                const storeKey = this.makeResponseCacheKey(cacheId);
                this.debug('caching response', messageId, cacheId);
                this.transferState.set(storeKey, data);
            }
        }
    }

    private makeResponseCacheKey(id: string): StateKey<string> {
        const key = `ws-${id}`;
        return makeStateKey<any>(key);
    }

    private debug(...args: any[]) {
        if (debug) {
            console.log(...args);
        }
    }
}
