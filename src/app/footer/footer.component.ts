import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
    hideCookies: boolean;
    constructor(public appService: AppService, private localStorage: LocalStorageService) {}

    ngOnInit() {
        this.hideCookies = !!this.localStorage.getItem('hideCookies');
    }

    hideCooks() {
        this.hideCookies = true;
        this.localStorage.setItem('hideCookies', '1');
    }

    openLink(url: string) {
        window.location.href = url;
    }
}
