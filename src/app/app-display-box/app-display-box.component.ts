import { Component, Input, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { AppListing } from '../account/account.component';

@Component({
    selector: 'app-app-display-box',
    templateUrl: './app-display-box.component.html',
    styleUrls: ['./app-display-box.component.css'],
})
export class AppDisplayBoxComponent implements OnInit {
    @Input() apps;
    @Input() showAds;
    @Input() isFourRow;
    constructor(public appService: AppService, public router: Router) {}

    ngOnInit() {}

    appImage(app) {
        let img = app.image ? app.image : app.image_url;
        return img + (img.endsWith('.gif') ? '' : '?size=512');
    }

    public appUrl(app: AppListing) {
        const isApp = !!app.apps_id;
        return isApp ? ['/app/', app.apps_id, this.appService.appParamName(app)] : ['/webvr'];
    }

    public gotoApp(app: AppListing) {
        const isApp = !!app.apps_id;
        if (isApp) {
            this.appService.scrollToTop();
            this.router.navigate(['/app/', String(app.apps_id), this.appService.appParamName(app)]);
        } else {
            this.appService.openLink(app.url);
        }
    }
}
