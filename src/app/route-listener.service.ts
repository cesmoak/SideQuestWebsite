import { ActivatedRoute, ActivatedRouteSnapshot, Params } from '@angular/router';
import { AsyncApiCallHelperService } from './async-api-call-helper.service';
import { TransferCacheWebSocketService } from './transfer-cache-web-socket.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class RouteListenerService {
    constructor(private processor: AsyncApiCallHelperService, private transferCache: TransferCacheWebSocketService) {}

    public onParamsUpdate(activatedRoute: ActivatedRoute, task: (route: ActivatedRouteSnapshot) => Promise<void>) {
        activatedRoute.params.subscribe(async (_params: Params) => {
            await this.processor.doTask(task(activatedRoute.snapshot)).toPromise();
            this.transferCache.stopUsingCache();
        });
    }
}
