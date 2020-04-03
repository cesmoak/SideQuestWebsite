import { MzSidenavCollapsibleComponent, MzSidenavCollapsibleContentDirective } from './sidenav-collapsible.component';
import { MzSidenavCollapsibleHeaderComponent } from './sidenav-collapsible-header.component';
import { MzSidenavComponent } from './sidenav.component';
import { MzSidenavDividerComponent } from './sidenav-divider.component';
import { MzSidenavHeaderComponent } from './sidenav-header.component';
import { MzSidenavLinkComponent } from './sidenav-link.component';
import { MzSidenavSubheaderComponent } from './sidenav-subheader.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [
        MzSidenavCollapsibleComponent,
        MzSidenavCollapsibleContentDirective,
        MzSidenavCollapsibleHeaderComponent,
        MzSidenavComponent,
        MzSidenavDividerComponent,
        MzSidenavHeaderComponent,
        MzSidenavLinkComponent,
        MzSidenavSubheaderComponent,
    ],
    exports: [
        MzSidenavCollapsibleComponent,
        MzSidenavCollapsibleContentDirective,
        MzSidenavCollapsibleHeaderComponent,
        MzSidenavComponent,
        MzSidenavDividerComponent,
        MzSidenavHeaderComponent,
        MzSidenavLinkComponent,
        MzSidenavSubheaderComponent,
    ],
})
export class ServerMzSidenavModule {}
