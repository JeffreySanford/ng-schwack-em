import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './views/landing/landing.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { GearComponent } from './views/gear/gear.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { TrustComponent } from './page/trust/trust.component';
import { ItemComponent } from './views/gear/item/item.component';

const appRoutes = [
  { path: 'landing', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gear', component: GearComponent },
  { path: 'item', component: ItemComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routing: AppRoutingModule = RouterModule.forRoot(appRoutes);
@NgModule({
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- boolean: true (debugging purposes only)
  ) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
