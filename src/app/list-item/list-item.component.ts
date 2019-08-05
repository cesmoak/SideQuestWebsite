import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.css"]
})
export class ListItemComponent implements OnInit {
  @Input() show_date_first: boolean;
  @Input() show_date: boolean;
  @Input() hide_time: boolean;
  @Input() name: string;
  @Input() description: string;
  @Input() image: string;
  @Input() start_time: number;
  @Input() duration: number;
  @Output() open = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}