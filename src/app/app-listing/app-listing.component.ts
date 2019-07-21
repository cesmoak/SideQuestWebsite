import { Component, OnDestroy, OnInit } from "@angular/core";
import { AppListing } from "../account/account.component";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { AppService } from "../app.service";
import { ExpanseClientService } from "../expanse-client.service";
import { Subscription } from "rxjs";

import * as urlParser from "../../../node_modules/js-video-url-parser/lib/base";
import "js-video-url-parser/lib/provider/vimeo";
import "js-video-url-parser/lib/provider/youtube";
import {
  AppCounter,
  AppUrl,
  GithubRelease,
  ScreenShot,
  VideObject
} from "../app-manager/app-manager.component";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { IAlbum, Lightbox } from "ngx-lightbox";

interface SocialIcon {
  provider: string;
  icon: string;
}
@Component({
  selector: "app-app-listing",
  templateUrl: "./app-listing.component.html",
  styleUrls: ["./app-listing.component.css"]
})
export class AppListingComponent implements OnInit, OnDestroy {
  sub: Subscription;
  apps_id: number;
  is_not_found: boolean;
  hasGithubRepo: boolean;
  isGettingGithub: boolean;
  isAllReleases: boolean;
  currentApp: AppListing = {
    name: "",
    app_categories_id: "1",
    image_url: "",
    video_url: "",
    comfort: 0,
    summary: "",
    description: "",
    apk_url: "",
    packagename: "",
    versioncode: 0,
    versionname: "",
    license: "FREE",
    website: "",
    donate_url: "",
    github_name: "",
    github_repo: "",
    github_tag: "",
    github_enabled: false,
    updated: 0,
    created: 0,
    supports_quest: true,
    supports_go: false,
    supports_other: false,
    search_tags: "",
    is_first_publish: false,
    active: false,
    deleted: false
  };
  searchTags: string[];
  screenshots: string[];
  counters = {
    l: 0,
    v: 0,
    d: 0
  };
  app_urls: AppUrl[];
  donate_urls: AppUrl[];
  social_urls: AppUrl[];
  website_url: AppUrl[];
  apk_download_urls: AppUrl[];
  videoObject: VideObject;
  videoUrl: SafeUrl;
  githubReleases: GithubRelease[];
  urlIcons: { [key: string]: { [key: string]: string } } = {
    Facebook: { icon: "assets/images/social/Facebook.png" },
    Twitter: { icon: "assets/images/social/Twitter.png" },
    Discord: { icon: "assets/images/social/Discord.png" },
    Reddit: { icon: "assets/images/social/Reddit.png" },
    Youtube: { icon: "assets/images/social/Youtube.png" },
    Instagram: { icon: "assets/images/social/Instagram.png" },
    Github: { icon: "assets/images/social/Github.png" },
    Twitch: { icon: "assets/images/social/Twitch.png" },
    Vimeo: { icon: "assets/images/social/Vimeo.png" },
    Patreon: { icon: "assets/images/social/Patreon.png" },
    Itch: { icon: "assets/images/social/Itch.png" },
    Paypal: { icon: "assets/images/social/Paypal.png" },
    Kofi: { icon: "assets/images/social/Kofi.png" }
  };
  album: IAlbum[] = [];
  app_meta: any;
  stats = {
    view: 0,
    like: 0,
    download: 0
  };
  constructor(
    private router: Router,
    public service: AppService,
    private expanseService: ExpanseClientService,
    route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public lightbox: Lightbox
  ) {
    this.sub = this.router.events.subscribe(async val => {
      if (val instanceof NavigationEnd) {
        this.apps_id = Number(route.snapshot.paramMap.get("apps_id"));
        if (!Number.isInteger(this.apps_id)) {
          this.apps_id = null;
        } else {
          let app_meta = localStorage.getItem("am_" + this.apps_id);
          if (!app_meta) {
            this.defaultAppMeta();
          } else {
            try {
              this.app_meta = JSON.parse(app_meta);
            } catch (e) {
              this.defaultAppMeta();
            }
          }
        }
        this.setupApp().then(() => this.viewApp());
      }
    });
  }

  downloadCount() {
    if (!this.app_meta.d) {
      return this.expanseService
        .appCount("download", this.apps_id)
        .then((res: any) => {
          if (!res.error) {
            this.app_meta.d = 1;
            this.counters.d++;
            this.saveAppMeta();
          }
        });
    }
  }

  viewApp() {
    if (!this.app_meta.v) {
      return this.expanseService
        .appCount("view", this.apps_id)
        .then((res: any) => {
          if (!res.error) {
            this.app_meta.v = 1;
            this.counters.v++;
            this.saveAppMeta();
          }
        });
    }
  }

  likeApp() {
    if (!this.app_meta.l) {
      return this.expanseService
        .appCount("like", this.apps_id)
        .then((res: any) => {
          this.service.showMessage(res, "App Liked!");
          if (!res.error) {
            this.app_meta.l = 1;
            this.counters.l++;
            this.saveAppMeta();
          }
        });
    } else {
      this.service.showMessage({}, "You already liked that!");
    }
  }

  defaultAppMeta() {
    this.app_meta = {
      v: 0,
      d: 0,
      l: 0
    };
    this.saveAppMeta();
    return this.expanseService.appCount("view", this.apps_id);
  }

  saveAppMeta() {
    localStorage.setItem("am_" + this.apps_id, JSON.stringify(this.app_meta));
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  openImage(i: number) {
    this.lightbox.open(this.album, i);
  }

  openItems(apps: any, isRelease: boolean) {
    window.location.href =
      "sidequest://sideload-multi/#" +
      JSON.stringify(
        isRelease
          ? apps.map(app => app.browser_download_url)
          : apps.map(app => app.link_url)
      );
  }

  openItem(url: string) {
    window.location.href = url;
  }

  async setupApp() {
    if (this.apps_id) {
      const apps = (await this.expanseService.start().then(() => {
        return this.expanseService.getApp(this.apps_id);
      })) as AppListing[];
      if (!apps.length) {
        this.apps_id = null;
        this.is_not_found = true;
      } else {
        this.currentApp = apps[0];
        this.searchTags = (this.currentApp.search_tags || "")
          .split(",")
          .filter(t => t);
        const counters = (await this.expanseService.getAppTotals(
          this.apps_id
        )) as AppCounter[];
        counters.forEach(counter => {
          switch (counter.type) {
            case "view":
              this.counters.v = counter.counter;
              break;
            case "download":
              this.counters.d = counter.counter;
              break;
            case "like":
              this.counters.l = counter.counter;
              break;
          }
        });
        const screenshots = (await this.expanseService.getAppScreenshots(
          this.apps_id
        )) as ScreenShot[];
        const sort = (a, b) =>
          a.provider > b.provider ? 1 : b.provider > a.provider ? -1 : 0;
        this.app_urls = (await this.expanseService.getAppUrls(
          this.apps_id
        )) as AppUrl[];
        this.donate_urls = this.app_urls.filter(
          (url: AppUrl) =>
            ["Patreon", "Paypal", "Itch", "Kofi"].indexOf(url.provider) > -1
        );
        this.donate_urls.sort(sort);
        this.social_urls = this.app_urls.filter(
          (url: AppUrl) =>
            [
              "Discord",
              "Twitter",
              "Youtube",
              "Facebook",
              "Instagram",
              "Github",
              "Reddit",
              "Twitch",
              "Vimeo"
            ].indexOf(url.provider) > -1
        );
        this.social_urls.sort(sort);
        this.website_url = this.app_urls.filter(
          (url: AppUrl) => url.provider === "Website"
        );
        this.apk_download_urls = this.app_urls.filter(
          (url: AppUrl) => ["OBB", "APK"].indexOf(url.provider) > -1
        );
        this.screenshots = (screenshots || []).map(s => s.image_url);
        this.album = this.screenshots.map(s => ({ src: s, thumb: s }));
        if (this.currentApp.image_url) {
          this.album.push({
            src: this.currentApp.image_url,
            thumb: this.currentApp.image_url
          });
        }
        this.videoObject = urlParser.parse(this.currentApp.video_url);
        if (this.videoObject) {
          this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
            this.videoObject.provider === "youtube"
              ? "https://www.youtube.com/embed/" + this.videoObject.id
              : "https://player.vimeo.com/video/" +
                  this.videoObject.id +
                  "?byline=0&portrait=0&transparent=0"
          );
        }
        if (
          this.currentApp.github_enabled &&
          this.currentApp.github_repo &&
          this.currentApp.github_name &&
          this.currentApp.github_tag
        ) {
          await this.findGitReleases();
          if (
            (this.currentApp.github_tag === "[ all ]" ||
              this.currentApp.github_tag === "[ latest ]") &&
            this.githubReleases.length
          ) {
            this.isAllReleases = true;
            const first_release = this.githubReleases.shift();
            this.apk_download_urls = this.apk_download_urls.concat(
              first_release.assets
                .filter((asset: any) => {
                  return (
                    ["apk", "obb"].indexOf(
                      asset.name
                        .split(".")
                        .pop()
                        .toLowerCase()
                    ) > -1
                  );
                })
                .map(asset => {
                  return {
                    link_url: asset.browser_download_url,
                    provider: asset.name
                      .split(".")
                      .pop()
                      .toUpperCase()
                  };
                })
            );
            if (this.currentApp.github_tag === "[ all ]") {
              this.githubReleases.forEach(release => {
                release.assets = release.assets.filter(
                  asset =>
                    ["apk", "obb"].indexOf(
                      asset.name
                        .split(".")
                        .pop()
                        .toLowerCase()
                    ) > -1
                );
              });
              this.githubReleases = this.githubReleases.filter(
                release => release.assets.length
              );
            }
          } else {
            const tag_release = this.githubReleases.filter(
              release => release.tag_name === this.currentApp.github_tag
            );
            if (tag_release.length) {
              this.apk_download_urls = this.apk_download_urls.concat(
                tag_release[0].assets.filter((asset: any) => {
                  return (
                    ["apk", "obb"].indexOf(
                      asset.name
                        .split(".")
                        .pop()
                        .toLowerCase()
                    ) > -1
                  );
                })
              );
            }
          }
        }
      }
    }
  }

  openUrl(link: string) {
    window.location.href = link;
  }

  findGitReleases() {
    this.isGettingGithub = true;
    this.hasGithubRepo = false;
    return fetch(
      "https://api.github.com/repos/" +
        this.currentApp.github_name +
        "/" +
        this.currentApp.github_repo +
        "/releases"
    ).then(async r => {
      if (r.ok) {
        this.githubReleases = await r.json();
        this.hasGithubRepo = true;
      } else {
        this.hasGithubRepo = false;
      }
      this.isGettingGithub = false;
    });
  }
}
