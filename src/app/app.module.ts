import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AppComponent } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPageComponent } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";
import {ContactsService} from "../pages/contact/contacts.service";
import {Camera} from "@ionic-native/camera";
import {FormsModule} from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import {environment} from "./environment";

@NgModule({
  declarations: [
    AppComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(AppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPageComponent
  ],
  providers: [
    StatusBar,
    Camera,
    SplashScreen,
    ContactsService,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
