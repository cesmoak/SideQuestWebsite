import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mz-sidenav-link',
    template: '',
    encapsulation: ViewEncapsulation.Emulated,
})
export class MzSidenavLinkComponent {
    @Input() active: boolean;
}
