import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AppService } from './app.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MzToastService } from 'ngx-materialize';
import { ExpanseClientService } from './expanse-client.service';
import { UploadService } from './upload.service';
import { AppsToUpdateService } from './apps-to-update.service';
import { Meta, Title } from '@angular/platform-browser';
declare const M;
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnDestroy, OnInit {
    @ViewChild('scrollContainer', { static: false }) scrollContainer;
    @ViewChild('confirmOpen', { static: false }) confirmOpen;
    title = 'SideQuestWebsite';
    sub: Subscription;
    message_sound: any;
    friend_sound: any;
    @ViewChild('sideNav', { static: false }) sideNav;
    constructor(
        public expanseService: ExpanseClientService,
        public appService: AppService,
        private router: Router,
        route: ActivatedRoute,
        private toastService: MzToastService,
        private uploadService: UploadService,
        private appsToUpdateService: AppsToUpdateService,
        private meta: Meta,
        private titleService: Title
    ) {
        this.sub = router.events.subscribe(val => {
            if (val instanceof NavigationEnd) {
                const isAppPage = val.urlAfterRedirects.startsWith('/app/');
                if (!isAppPage) {
                    this.setupHeadTags();
                }
            }
        });
        this.expanseService.start();
        // .then(() => this.expanseService.getInstalledApps("", 0));
        this.setupAppUninstall();
        this.expanseService.onusermessage = this.userMessage.bind(this);

        this.expanseService.onremoteinstall = this.appService.remoteInstall.bind(this.appService);

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

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    userMessage(data) {
        if (data.message.is_blocked) {
        } else if (data.message.is_friend_request) {
            this.appService.getNotifications(this.expanseService);
            this.friend_sound.play();
        } else if (data.message.spaces_id) {
        } else {
            this.appService.getNotifications(this.expanseService);
            this.message_sound.play();
            if (this.appService.accountComponent && this.appService.accountComponent.mainPage === 'message-thread') {
                this.appService.accountComponent.page = 0;
                this.appService.accountComponent.getCurrent();
            }
        }
    }

    setupAppUninstall() {
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

    scrollFire() {
        return document.body.scrollTop > 180 || (window.innerWidth < 992 && document.body.scrollTop > 80);
    }

    ngOnInit() {
        this.appService.getNotifications(this.expanseService);
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

    private setupHeadTags() {
        const title = 'SideQuest - Make it your own';
        const description = 'SideQuest is a tool to help simplify getting content onto Quest and Go and other VR headsets.';
        const author = 'SideQuest';
        const image = 'https://i.imgur.com/AlYMbTj.png';
        const url = 'https://sidequestvr.com/';
        const video = '';

        this.titleService.setTitle(title);
        this.meta.updateTag({ name: 'title', content: title });
        this.meta.updateTag({ name: 'description', content: description });

        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'og:image', content: image });
        this.meta.updateTag({ property: 'og:url', content: url });
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'og:site_name', content: 'SideQuest' });
        this.meta.updateTag({ property: 'og:video', content: video });

        this.meta.updateTag({ property: 'twitter:title', content: title });
        this.meta.updateTag({ property: 'twitter:site', content: '@SideQuestVR' });
        this.meta.updateTag({ property: 'twitter:creator', content: author });
        this.meta.updateTag({ property: 'twitter:description', content: description });
        this.meta.updateTag({ property: 'twitter:image', content: image });
    }
}
