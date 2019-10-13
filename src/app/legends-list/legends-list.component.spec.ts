import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { LegendsListComponent } from "./legends-list.component";

describe("LegendsListComponent", () => {
  let component: LegendsListComponent;
  let fixture: ComponentFixture<LegendsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LegendsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
