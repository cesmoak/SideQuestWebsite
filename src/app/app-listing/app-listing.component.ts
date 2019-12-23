import { Component, OnDestroy, OnInit } from "@angular/core";
import { AppListing, Review } from "../account/account.component";
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
export class UrlIcons {
  Facebook = { icon: "assets/images/social/Facebook.png" };
  Twitter = { icon: "assets/images/social/Twitter.png" };
  Discord = { icon: "assets/images/social/Discord.png" };
  Reddit = { icon: "assets/images/social/Reddit.png" };
  Youtube = { icon: "assets/images/social/Youtube.png" };
  Instagram = { icon: "assets/images/social/Instagram.png" };
  Github = { icon: "assets/images/social/Github.png" };
  Twitch = { icon: "assets/images/social/Twitch.png" };
  Vimeo = { icon: "assets/images/social/Vimeo.png" };
  Patreon = { icon: "assets/images/social/Patreon.png" };
  Itch = { icon: "assets/images/social/Itch.png" };
  Paypal = { icon: "assets/images/social/Paypal.png" };
  Kofi = { icon: "assets/images/social/Kofi.png" };
  "Oculus Quest" = {
    icon: "assets/images/social/Oculus Quest Listing.png"
  };
  "Oculus Go" = { icon: "assets/images/social/Oculus Go Listing.png" };
  "Oculus Rift" = {
    icon: "assets/images/social/Oculus Rift Listing.png"
  };
  "Oculus GearVR" = {
    icon: "assets/images/social/Oculus GearVR Listing.png"
  };
  "Steam Page" = { icon: "assets/images/social/Steam Page.png" };
  "Epic Store" = { icon: "assets/images/social/EpicStore.png" };
  Viveport = { icon: "assets/images/social/Viveport.png" };
}
@Component({
  selector: "app-app-listing",
  templateUrl: "./app-listing.component.html",
  styleUrls: ["./app-listing.component.css"]
})
export class AppListingComponent implements OnInit, OnDestroy {
  urlIcons: UrlIcons = new UrlIcons();
  sub: Subscription;
  apps_id: number;
  is_not_found: boolean;
  hasGithubRepo: boolean;
  isGettingGithub: boolean;
  isAllReleases: boolean;
  isInstalled = false;
  installedVersion: number;
  currentReviewId: number;
  currentApp: AppListing = {
    name: "",
    users_id: 0,
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
    early_access: false,
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
    ct: 0,
    v: 0,
    d: 0
  };
  isMine: boolean;
  app_urls: AppUrl[];
  donate_urls: AppUrl[];
  social_urls: AppUrl[];
  website_url: AppUrl[];
  apk_download_urls: AppUrl[];
  store_urls: AppUrl[];
  videoObject: VideObject;
  videoUrl: SafeUrl;
  githubReleases: GithubRelease[];
  currentReview: string;
  currentRating = 3;
  comforts: string[] = [
    "Comfortable",
    "Moderate",
    "Average",
    "Exciting",
    "Intense"
  ];
  album: IAlbum[] = [];
  app_meta: any;
  stats = {
    clickthrough: 0,
    view: 0,
    like: 0,
    download: 0
  };
  appRating: number;
  appRatingTotal: number;
  latest_tag: string;
  latest_id: number;
  loading = true;
  reviews: Review[] = [];
  recaptcha: any;
  captchaSuccess: boolean;
  hasNoMoreReviews: boolean;
  isLoading: boolean;
  page = 0;
  searchTimeout: any;
  searchString: string;
  isAccepted: boolean;
  constructor(
    private router: Router,
    public service: AppService,
    public expanseService: ExpanseClientService,
    route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    public lightbox: Lightbox
  ) {
    this.sub = this.router.events.subscribe(async val => {
      if (val instanceof NavigationEnd) {
        this.apps_id = Number(route.snapshot.paramMap.get("apps_id"));
        let clickthrough = Number(route.snapshot.paramMap.get("clickthrough"));
        if (!Number.isInteger(this.apps_id)) {
          this.apps_id = null;
        } else {
          this.service.getAppMeta(this.apps_id);
          this.app_meta = this.service.app_meta[this.apps_id];
        }
        this.page = 0;
        this.setupApp()
          .then(() => this.viewApp())
          .then(() => {
            if (clickthrough) {
              return this.clickThroughApp();
            }
          })
          .then(() => {
            this.loading = false;
            this.isMine =
              this.service.isAuthenticated &&
              Number(this.currentApp.users_id) ===
                Number(this.expanseService.currentSession.users_id);
          })
          .then(() => this.getReviews());
      }
    });
  }

  done(e) {
    this.captchaSuccess = true;
  }

  debounceSearch() {
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.page = 0;
      this.getReviews();
    }, 750);
  }

  getReviews() {
    return this.expanseService
      .getReviews(this.apps_id, "apps", this.page, this.searchString)
      .then((r: Review[]) => {
        this.hasNoMoreReviews = r.length < 20;
        if (this.page === 0) {
          this.reviews.length = 0;
        }
        this.isLoading = false;
        this.reviews = this.reviews.concat(r);
        this.page++;
      })
      .then(() => this.expanseService.getRating(this.apps_id, "apps"))
      .then((r: any) => {
        if (r.length) {
          this.appRating = r[0].rating;
          this.appRatingTotal = r[0].total;
        }
      });
  }

  deleteReviewConfirm() {
    this.expanseService
      .deleteReview(this.apps_id, "apps", this.currentReviewId)
      .then(r => this.service.showMessage(r, "Review Deleted!"))
      .then(() => {
        this.currentReviewId = null;
        this.page = 0;
        this.getReviews();
      });
  }

  addReview() {
    if (!this.captchaSuccess) {
      this.service.showMessage(
        { error: true, data: "Please complete the anti-robot check." },
        ""
      );
      return;
    }
    this.expanseService
      .addReview(
        this.currentReview,
        this.currentRating,
        this.apps_id,
        null,
        null,
        this.currentReviewId
      )
      .then((r: any) => {
        this.service.showMessage(r, "Review Added!");
        if (!r.error) {
          return fetch(
            "https://shanesedit.org:5678/new_review/" + r.reviews_id
          );
        }
      })
      .then(() => {
        this.page = 0;
        this.currentReview = "";
        this.currentRating = 3;
        this.currentReviewId = null;
        return this.getReviews();
      });
  }

  backClicked() {
    (window as any).history.back();
  }

  copyShareUrl(isRefresh?) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(this.currentApp.donate_url).then(
        () => {
          this.service.showMessage(
            { error: false },
            "Share URL Copied to clipboard!"
          );
        },
        err => {
          this.service.showMessage(
            { error: true, data: "Cant copy share url!" },
            ""
          );
        }
      );
    }
  }

  downloadCount() {
    if (!this.app_meta.d) {
      return this.expanseService
        .appCount("download", this.apps_id)
        .then((res: any) => {
          if (!res.error) {
            this.service.app_meta[this.apps_id].d = 1;
            this.service.app_meta[
              this.apps_id
            ].vc = this.currentApp.versioncode;
            this.counters.d++;
            this.service.saveAppMeta();
          }
        });
    }
  }

  clickThroughApp() {
    if (!this.app_meta.ct) {
      return this.expanseService
        .appCount("click", this.apps_id)
        .then((res: any) => {
          if (!res.error) {
            this.service.app_meta[this.apps_id].ct = 1;
            this.counters.ct++;
            this.service.saveAppMeta();
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
            this.service.app_meta[this.apps_id].v = 1;
            this.counters.v++;
            this.service.saveAppMeta();
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
            this.service.app_meta[this.apps_id].l = 1;
            this.counters.l++;
            this.service.saveAppMeta();
          }
        });
    } else {
      this.service.showMessage({}, "You already liked that!");
    }
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  openImage(i: number) {
    this.lightbox.open(this.album, i);
  }

  openItems(apps: any) {
    this.downloadCount();
    // let customUrl;
    // let _apps = JSON.stringify(
    //   apps.map(app =>
    //     app.browser_download_url
    //       ? app.browser_download_url.trim()
    //       : app.link_url.trim()
    //   )
    // );
    // if (
    //   this.currentApp.app_categories_id === "4" &&
    //   this.currentApp.website === "FirefoxSkybox"
    // ) {
    //   customUrl = "sidequest://firefox-skybox/#" + _apps;
    // } else if (
    //   this.currentApp.app_categories_id === "4" &&
    //   this.currentApp.website === "SynthRiders"
    // ) {
    //   customUrl = "sidequest://synthriders-multi/#" + _apps;
    // } else if (
    //   this.currentApp.app_categories_id === "4" &&
    //   this.currentApp.website === "BeatOn"
    // ) {
    //   customUrl = "sidequest://bsaber-multi/#" + _apps;
    // } else {
    //   customUrl = "sidequest://sideload-multi/#" + _apps;
    // }
    // if (customUrl) {
    //   this.service.openSidequestUrl(customUrl).then(() => {
    return this.subscribeToApp();
    //  });
    // }
  }

  subscribeIfItch(provider) {
    if (provider === "Itch") {
      if (this.apk_download_urls.length === 0) {
        this.downloadCount();
        this.subscribeToApp();
      }
    }
  }

  subscribeToApp() {
    return this.service.isAuthenticated
      ? this.expanseService
          .addInstalledApp(this.apps_id, this.currentApp.versioncode)
          .then(res => {
            if (this.service.hideLogo) {
              this.service.remoteInstall({
                app_urls: this.apk_download_urls,
                website: this.currentApp.website,
                app_categories_id: this.currentApp.app_categories_id
              });
              this.service.showMessage({ error: false }, "Installing...");
            } else {
              if (this.apk_download_urls.length > 0) {
                this.service.showMessage(res, "Sending to SideQuest...");
              }
            }
          })
      : Promise.resolve().then(() => {
          if (this.apk_download_urls && this.apk_download_urls.length) {
            this.service.remoteInstall({
              app_urls: this.apk_download_urls,
              website: this.currentApp.website,
              app_categories_id: this.currentApp.app_categories_id
            });
            this.service.showMessage(
              { error: false },
              this.service.hideLogo
                ? "Installing..."
                : "Sending to SideQuest Locally..."
            );
          }
        });
  }

  uninstallApp(packageName) {
    if (
      (this.currentApp.website === "BeatOn" ||
        this.currentApp.website === "SynthRiders") &&
      this.currentApp.app_categories_id === "4"
    ) {
      this.expanseService
        .uninstallApp(this.apps_id)
        .then(() => (this.isInstalled = false));
    } else {
      this.service
        .openSidequestUrl("sidequest://unload/#" + packageName)
        .then(() => this.expanseService.uninstallApp(this.apps_id))
        .then(() => (this.isInstalled = false));
    }
  }

  openItem(url: string) {
    this.service.openSidequestUrl(url.trim());
  }

  async setupApp() {
    if (this.apps_id) {
      const apps = (await this.expanseService.start().then(() => {
        return this.expanseService.getApp(this.apps_id);
      })) as AppListing[];
      this.getUserInstalled();
      if (!apps.length) {
        this.apps_id = null;
        this.is_not_found = true;
      } else {
        this.currentApp = apps[0];
        if (!this.currentApp.early_access) {
          console.log("Current App: ", this.currentApp);
        }
        this.searchTags = (this.currentApp.search_tags || "")
          .split(",")
          .filter(t => t);
        const counters = (await this.expanseService.getAppTotals(
          this.apps_id
        )) as AppCounter[];
        counters.forEach(counter => {
          switch (counter.type) {
            case "click":
              this.counters.ct = counter.counter;
              break;
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
        if (!this.currentApp.early_access) {
          console.log("APP Urls: ", this.app_urls);
        }
        this.donate_urls = this.app_urls.filter(
          (url: AppUrl) =>
            ["Patreon", "Paypal", "Itch", "Kofi"].indexOf(url.provider) > -1
        );
        this.store_urls = this.app_urls.filter(
          (url: AppUrl) =>
            [
              "Oculus Quest",
              "Oculus Go",
              "Steam Page",
              "Oculus Rift",
              "Oculus GearVR",
              "Viveport",
              "Epic Store"
            ].indexOf(url.provider) > -1
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
          (url: AppUrl) =>
            [
              "OBB",
              "APK",
              "SynthRiders Mod",
              "BeatOn Mod",
              "Github Release",
              "Firefox Skybox"
            ].indexOf(url.provider) > -1
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

        const sideQuest = (window as any).sideQuest;
        console.log(sideQuest);
        console.log(this.currentApp.packagename);
        if (sideQuest) {
          this.isInstalled =
            sideQuest.installed.indexOf(this.currentApp.packagename) > -1;
        }
        const githubRelesUrls = this.app_urls.filter(
          (url: AppUrl) => url.provider === "Github Release"
        );
        if (
          this.currentApp.github_enabled &&
          this.currentApp.github_repo &&
          this.currentApp.github_name &&
          this.currentApp.github_tag &&
          !githubRelesUrls.length
        ) {
          await this.findGitReleases();
          if (
            (this.currentApp.github_tag === "[ all ]" ||
              this.currentApp.github_tag === "[ latest ]") &&
            this.githubReleases.length
          ) {
            this.isAllReleases = true;
            const first_release = this.githubReleases.shift();
            this.latest_tag = first_release.tag_name;
            this.latest_id = first_release.id;
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
          } else {
            const tag_release = this.githubReleases.filter(
              release => release.tag_name === this.currentApp.github_tag
            );
            if (tag_release.length) {
              this.latest_tag = tag_release[0].tag_name;
              this.latest_id = tag_release[0].id;
              this.apk_download_urls = this.apk_download_urls.concat(
                tag_release[0].assets
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
            }
          }
        }
      }
    }
  }

  openUrl(link: string) {
    window.location.href = link;
  }

  getUserInstalled() {
    if (this.service.isAuthenticated) {
      this.expanseService
        .searchInstalledApps("", 0, false, false, this.apps_id)
        .then((r: any) => {
          if (r.length) {
            this.installedVersion = r[0].current_version;
            this.isInstalled = true;
          }
        });
    }
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
