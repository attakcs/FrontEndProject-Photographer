import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing/landing.component';
import { DeutschComponent } from './deutsch/deutsch.component';
import { EnglishComponent } from './english/english.component';
import { BlogComponent } from './blog/blog.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ContactComponent } from './contact/contact.component';
import { HeroComponent } from './hero/hero.component';
import { CustomerService } from "./shared/customer.service";
import { ImgService } from './shared/img.service';
import { ImageFilterPipe } from './shared/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    EquipmentComponent,
    AboutComponent,
    LandingComponent,
    DeutschComponent,
    EnglishComponent,
    BlogComponent,
    CustomerComponent,
    CustomerListComponent,
    ContactComponent,
    HeroComponent,
    ImageFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
   AngularFireDatabaseModule, // we will import the classes here too
    FormsModule,
  ],
  providers: [CustomerService, ImgService, ImageFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }