import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { ExpanseClientService } from "../expanse-client.service";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { UploadService } from "../upload.service";
import { AppService } from "../app.service";
import { EventListing } from "../account/account.component";
import * as moment from "moment";
import { Subscription } from "rxjs";
import { VideObject } from "../app-manager/app-manager.component";
import * as urlParser from "../../../node_modules/js-video-url-parser/lib/base";

@Component({
  selector: "app-event-manager",
  templateUrl: "./event-manager.component.html",
  styleUrls: ["./event-manager.component.css"]
})
export class EventManagerComponent implements OnInit, OnDestroy {
  currentApp: EventListing = {
    name: "",
    description: "",
    event_name: "",
    event_description: "",
    image: "",
    event_image: "",
    event_repeat_type: "oneoff",
    event_repeat_amount: 4,
    event_duration: 60 * 60,
    event_url: "",
    share_url: "",
    video_url: "",
    app_url: "",
    is_approved: false
  };
  selectedDate = {
    start: moment(), // new Date(new Date().getTime() - (1000 * 3600 * 24 * 7)),
    end: null
  };
  selectedTime = 1080;
  sub: Subscription;
  events_id: string;
  videoObject: VideObject;
  videoUrl: SafeUrl;
  is_not_found: boolean;
  constructor(
    private router: Router,
    private service: AppService,
    private expanseService: ExpanseClientService,
    private sanitizer: DomSanitizer,
    route: ActivatedRoute,
    public uploadService: UploadService
  ) {
    this.sub = this.router.events.subscribe(async val => {
      if (val instanceof NavigationEnd) {
        this.events_id = route.snapshot.paramMap.get("events_id");
        if (this.events_id) {
          let event: any = await this.expanseService
            .start()
            .then(() => this.expanseService.getEvent(this.events_id));
          let date = new Date(+event.start_time * 1000);
          date.setHours(0, 0, 0, 0);
          this.selectedTime =
            (+event.start_time - Math.floor(date.getTime() / 1000)) / 60;
          this.selectedDate = {
            start: moment(date),
            end: null
          };
          this.currentApp.name = event.name;
          this.currentApp.description = event.description;
          this.currentApp.event_name = event.event_name;
          this.currentApp.event_description = event.event_description;
          this.currentApp.image = event.image;
          this.currentApp.event_image = event.event_image;
          this.currentApp.video_url = event.video_url;
          this.currentApp.event_repeat_type = event.event_repeat_type;
          this.currentApp.event_repeat_amount = event.event_repeat_amount;
          this.currentApp.event_duration = event.event_duration;
          this.currentApp.event_url = event.event_url;
          this.currentApp.app_url = event.app_url;
          this.currentApp.share_url = event.share_url;
          this.currentApp.is_approved = event.is_approved;
          this.onVideoChange();
        }
      }
    });
  }

  ngOnInit() {}

  customCss() {
    return "black-text";
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  uploadIcon() {
    this.uploadService.uploadImage(true).then((res: any) => {
      this.currentApp.event_image = this.expanseService.cdnUrl + res.path;
    });
  }

  onVideoChange() {
    this.videoObject = urlParser.parse(this.currentApp.video_url || "");
    if (this.videoObject) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.videoObject.provider === "youtube"
          ? "https://www.youtube.com/embed/" + this.videoObject.id
          : "https://player.vimeo.com/video/" +
              this.videoObject.id +
              "?byline=0&portrait=0"
      );
    }
  }

  refreshShareLink() {
    return fetch(
      "https://xpan.cc/delete-link/" +
        this.expanseService.currentSession.token +
        "/e-" +
        this.events_id,
      {
        method: "GET",
        cache: "no-cache"
      }
    )
      .then(() =>
        fetch(
          "https://xpan.cc/get-link/" +
            this.expanseService.currentSession.token +
            "/e-" +
            this.events_id +
            "/" +
            (window as any).encodeURIComponent(
              "https://sidequestvr.com/#/event/" + this.events_id
            ) +
            "/" +
            (window as any).encodeURIComponent(
              this.currentApp.event_name || this.currentApp.name
            ) +
            " on SideQuest" +
            "/" +
            (window as any).encodeURIComponent(this.currentApp.event_image) +
            "/" +
            ((window as any).encodeURIComponent(
              this.currentApp.event_description || this.currentApp.description
            ) || "-"),
          {
            method: "GET",
            cache: "no-cache"
          }
        )
      )
      .then(r => r.json())
      .then(r => (this.currentApp.share_url = r.url));
  }

  saveEvent() {
    const dateSelected = this.selectedDate.start.toDate();
    dateSelected.setHours(0, 0, 0, 0);
    const start_time =
      Math.floor(dateSelected.getTime() / 1000) + this.selectedTime * 60;
    if (this.events_id) {
      this.refreshShareLink()
        .then(() => this.expanseService.start())
        .then(() => console.log(this.currentApp.share_url))
        .then(() =>
          this.expanseService.updateEvent({
            spaces_id: null,
            start_time: start_time,
            event_duration: this.currentApp.event_duration,
            events_id: this.events_id,
            event_name: this.currentApp.event_name,
            event_description: this.currentApp.event_description,
            event_url: this.currentApp.event_url,
            video_url: this.currentApp.video_url,
            event_image: this.currentApp.event_image,
            app_url: this.currentApp.app_url,
            share_url: this.currentApp.share_url,
            event_repeat_amount: this.currentApp.event_repeat_amount,
            event_repeat_type: this.currentApp.event_repeat_type
          })
        )
        .then(res => {
          this.service.showMessage(res, "Event Saved!");
          if (!this.currentApp.is_approved) {
            // this.sendForApproval(this.apps_id);
          }
        });
    } else {
      this.expanseService
        .start()
        .then(() =>
          this.expanseService.createEvent({
            spaces_id: null,
            start_time: start_time,
            event_duration: this.currentApp.event_duration,
            event_name: this.currentApp.event_name,
            event_description: this.currentApp.event_description,
            event_url: this.currentApp.event_url,
            video_url: this.currentApp.video_url,
            event_image: this.currentApp.event_image,
            app_url: this.currentApp.app_url,
            share_url: this.currentApp.share_url,
            event_repeat_amount: this.currentApp.event_repeat_amount,
            event_repeat_type: this.currentApp.event_repeat_type
          })
        )
        .then((res: any) => {
          this.service.showMessage(res, "Event Saved!");
          if (!res.error && res.length) {
            this.refreshShareLink();
            // this.sendForApproval(res[0].apps_id).then(() =>
            this.router.navigateByUrl("/my-event/" + res[0].events_id);
            // );
          }
        });
    }
  }

  sendForApproval(apps_id) {
    return fetch("https://shanesedit.org:5678/new_app/" + apps_id);
  }

  deleteEvent() {
    this.expanseService.deleteEvent(this.events_id).then(() => {
      return this.router.navigateByUrl("/account");
    });
  }

  copyUrl(url) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(
        () => {
          this.service.showMessage(
            { error: false },
            "URL Copied to clipboard!"
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
}
