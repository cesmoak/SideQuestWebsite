import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SetupHowtoComponent} from './setup-howto/setup-howto.component';

const routes: Routes = [
  {path: 'news', component: HomeComponent},
  {path: 'what-is-sidequest', component: HomeComponent},
  {path: 'app-submissions', component: HomeComponent},
  {path: 'the-expanse', component: HomeComponent},
  {path: 'setup-howto', component: SetupHowtoComponent},
  {path: '**', component: HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
