import { AfterViewInit, OnDestroy, Component, Input } from '@angular/core';

@Component({
    selector: 'mz-sidenav',
    template: '',
})
export class MzSidenavComponent implements AfterViewInit, OnDestroy {
    @Input() backgroundClass: string;
    @Input() closeOnClick: boolean;
    @Input() collapseButtonId: string;
    @Input() draggable: boolean;
    @Input() edge: string;
    @Input() fixed: boolean;
    @Input() id: string;
    @Input() onClose: Function;
    @Input() onOpen: Function;
    @Input() width: number;

    opened: boolean;
    ngAfterViewInit(): void {}
    ngOnDestroy(): void {}
    initCollapseButton(): void {}
    initCollapsibleLinks(): void {}
}
