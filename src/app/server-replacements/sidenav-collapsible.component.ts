import { Component, AfterViewInit, Input, ChangeDetectorRef, Renderer, Directive } from '@angular/core';

@Component({
    selector: 'mz-sidenav-collapsible',
    template: '',
})
export class MzSidenavCollapsibleComponent implements AfterViewInit {
    @Input() onClose: Function;
    @Input() onOpen: Function;

    constructor(public changeDetectorRef: ChangeDetectorRef, public renderer: Renderer) {}

    ngAfterViewInit() {}
    initCollapsible() {}
}

// Declare the tags to avoid error: '<mz-sidenav-collapsible-x>' is not a known element
// https://github.com/angular/angular/issues/11251
// tslint:disable: directive-selector
@Directive({ selector: 'mz-sidenav-collapsible-content' })
export class MzSidenavCollapsibleContentDirective {}
