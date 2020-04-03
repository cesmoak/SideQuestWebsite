import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpanseClientService } from '../expanse-client.service';
import { AppService } from '../app.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LocalStorageService } from '../local-storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
    email: string;
    password: string;
    error: string;
    sub: Subscription;
    return_url: string;
    recaptcha: any;
    captchaSuccess: boolean;
    constructor(
        public service: AppService,
        private expanseService: ExpanseClientService,
        private router: Router,
        route: ActivatedRoute,
        private localStorage: LocalStorageService
    ) {
        this.sub = this.router.events.subscribe(async val => {
            if (val instanceof NavigationEnd) {
                let return_url = route.snapshot.paramMap.get('return');
                if (return_url) {
                    this.return_url = decodeURIComponent(return_url);
                }
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    ngOnInit() {}

    done(e) {
        this.captchaSuccess = true;
    }

    login() {
        if (this.captchaSuccess) {
            this.expanseService.start().then(() =>
                this.expanseService.login(this.email, this.password).then((resp: any) => {
                    this.service.showMessage(resp, 'Signed In!!');
                    if (!resp.error) {
                        this.localStorage.setJson('session' + this.expanseService.storageKey, resp);
                        this.expanseService.currentSession = resp;
                        this.service.isAuthenticated = !!resp;
                        this.router.navigateByUrl(this.return_url || '/account');
                        this.expanseService.notifyInstalledAppsChanged();
                    }
                })
            );
        } else {
            this.service.showMessage({ error: true, data: 'Please complete the anti-robot check.' }, '');
        }
    }
}
