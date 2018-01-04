import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule, MatGridList, MatGridTile } from '@angular/material';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { SocialIconsComponent } from './page/social-icons/social-icons.component';
import { BrandComponent } from './page/header/brand/brand.component';
import { CopyComponent } from './page/footer/copy/copy.component';
import { FooterComponent } from './page/footer/footer.component';

import { LandingComponent } from './views/landing/landing.component';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { GearComponent } from './views/gear/gear.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { TrustComponent } from './page/trust/trust.component';
import { ItemComponent } from './views/gear/item/item.component';

import { map, filter, mergeMap, tap } from 'rxjs/operators';
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SocialIconsComponent,
    GearComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    BrandComponent,
    CopyComponent,
    LandingComponent,
    TrustComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  exports: [
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
