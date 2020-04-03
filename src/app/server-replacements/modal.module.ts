import { NgModule } from '@angular/core';
import { MzModalComponent, MzModalHeaderDirective, MzModalContentDirective, MzModalFooterDirective } from './modal.component';

@NgModule({
    declarations: [MzModalComponent, MzModalHeaderDirective, MzModalContentDirective, MzModalFooterDirective],
    exports: [MzModalComponent, MzModalHeaderDirective, MzModalContentDirective, MzModalFooterDirective],
})
export class ServerMzModalModule {}
