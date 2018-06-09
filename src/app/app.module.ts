import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LightboxModule } from 'ngx-lightbox';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategoryPipe } from './category.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LightBoxComponent } from './light-box/light-box.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactUsComponent,
    HomeComponent,
    StoreComponent,
    GalleryComponent,
    CategoryPipe,
    LightBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
