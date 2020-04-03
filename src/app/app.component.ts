import { AfterViewInit, Component, OnInit, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { AppService } from './app.service';
import { ExpanseClientService } from './expanse-client.service';
import { AppsToUpdateService } from './apps-to-update.service';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
    @ViewChild('scrollContainer', { static: false }) scrollContainer;
    @ViewChild('confirmOpen', { static: false }) confirmOpen;
    title = 'SideQuestWebsite';
    message_sound: any;
    friend_sound: any;
    @ViewChild('sideNav', { static: false }) sideNav;
    constructor(
        public expanseService: ExpanseClientService,
        public appService: AppService,
        private appsToUpdateService: AppsToUpdateService,
        @Inject(PLATFORM_ID) private platformId: Object,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.expanseService.start();
        // .then(() => this.expanseService.getInstalledApps("", 0));
        this.setupAppUninstall();
        this.expanseService.onusermessage = this.userMessage.bind(this);

        this.expanseService.onremoteinstall = this.appService.remoteInstall.bind(this.appService);

        if (isPlatformBrowser(this.platformId)) {
            this.message_sound = new Audio();
            this.message_sound.src = '../../assets/sounds/message.mp3';
            this.friend_sound = new Audio();
            this.friend_sound.src = '../../assets/sounds/message.mp3';

            window.addEventListener('dragover', function(e: any) {
                e.preventDefault();
            });
            window.addEventListener('drop', function(e: any) {
                e.preventDefault();
            });
        }
    }

    userMessage(data) {
        if (data.message.is_blocked) {
        } else if (data.message.is_friend_request) {
            this.appService.getNotifications(this.expanseService);
            if (isPlatformBrowser(this.platformId)) {
                this.friend_sound.play();
            }
        } else if (data.message.spaces_id) {
        } else {
            this.appService.getNotifications(this.expanseService);
            if (isPlatformBrowser(this.platformId)) {
                this.message_sound.play();
            }
            if (this.appService.accountComponent && this.appService.accountComponent.mainPage === 'message-thread') {
                this.appService.accountComponent.page = 0;
                this.appService.accountComponent.getCurrent();
            }
        }
    }

    setupAppUninstall() {
        if (isPlatformBrowser(this.platformId)) {
            (window as any).sideQuestRemove = pkg => {
                let isChanged = false;
                Object.keys(this.appService.app_index).forEach(apps_id => {
                    if (this.appService.app_index[apps_id] === pkg) {
                        this.expanseService.uninstallApp(apps_id);
                        isChanged = true;
                    }
                });
                if (isChanged) {
                    this.appService.saveAppMeta();
                }
            };
        }
    }

    scrollFire() {
        const innerWidth = isPlatformBrowser(this.platformId) ? window.innerWidth : 0;
        return this.document.body.scrollTop > 180 || (innerWidth < 992 && this.document.body.scrollTop > 80);
    }

    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.appService.getNotifications(this.expanseService);
        }
    }

    ngAfterViewInit() {
        this.appService.scrollContainer = this.scrollContainer.nativeElement;
        this.appService.confirmOpen = this.confirmOpen;
        this.appService.scrollContainer.addEventListener('scroll', () => window.dispatchEvent(new Event('scroll')));
        this.appsToUpdateService.init();
    }

    openLink(url: string) {
        window.location.href = url;
    }
}
