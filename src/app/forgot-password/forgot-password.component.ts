import { Component, OnInit } from '@angular/core';
import { ExpanseClientService } from '../expanse-client.service';
import { AppService } from '../app.service';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
    email: string;
    constructor(
        private expanseService: ExpanseClientService,
        private appService: AppService,
        private platformLocation: PlatformLocation,
        private router: Router
    ) {}

    ngOnInit() {}

    resetPassword() {
        this.expanseService.start().then(() =>
            this.expanseService.forgotPassword(this.email, this.resetPasswordUrl()).then(res => {
                this.appService.showMessage(res, 'Instructions sent!');
            })
        );
    }

    private resetPasswordUrl() {
        const { protocol, hostname, port: _port } = this.platformLocation;
        const port = _port === '443' ? '' : `:${_port}`;
        const path = this.router.createUrlTree(['/reset-password']);
        return `${protocol}//${hostname}${port}${path}`;
    }
}
