import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, Renderer, Directive } from '@angular/core';
import { HandlePropChanges } from 'ngx-materialize';

@Component({
    selector: 'mz-modal',
    template: '',
})
export class MzModalComponent extends HandlePropChanges implements OnInit, AfterViewInit {
    @Input() bottomSheet: boolean;
    @Input() fixedFooter: boolean;
    @Input() fullscreen: boolean;
    @Input() options: Materialize.ModalOptions;
    @Output() close = new EventEmitter<void>();

    modalElement: JQuery;

    constructor(public renderer: Renderer) {
        super();
    }

    ngOnInit() {}
    ngAfterViewInit() {}
    initElements() {}
    initHandlers() {}
    initModal() {}
    handleProperties() {}
    handleOptions() {}
    openModal() {}
    closeModal() {}
}

// Declare the tags to avoid error: '<mz-modal-x>' is not a known element
// https://github.com/angular/angular/issues/11251
// tslint:disable: directive-selector
@Directive({ selector: 'mz-modal-header' })
export class MzModalHeaderDirective {}
@Directive({ selector: 'mz-modal-content' })
export class MzModalContentDirective {}
@Directive({ selector: 'mz-modal-footer' })
export class MzModalFooterDirective {}
