import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {HttpModule} from "@angular/http";
import {ViewloginPage} from "../pages/viewlogin/viewlogin";
import {RegclientPage} from "../pages/regclient/regclient";
import {ViewpoliciesPage} from "../pages/viewpolicies/viewpolicies";
import {ViewtermsPage} from "../pages/viewterms/viewterms";
import {HomeemployeePage} from "../pages/homeemployee/homeemployee";
import {RegemployeePage} from "../pages/regemployee/regemployee";
import {RegbranchPage} from "../pages/regbranch/regbranch";
import {RegproductPage} from "../pages/regproduct/regproduct";
import {HomeclientPage} from "../pages/homeclient/homeclient";
import {ViewemployeesPage} from "../pages/viewemployees/viewemployees";
import {ViewclientsPage} from "../pages/viewclients/viewclients";
import {ViewbranchPage} from "../pages/viewbranch/viewbranch";
import {ViewproductPage} from "../pages/viewproduct/viewproduct";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ViewloginPage,
    RegclientPage,
    ViewpoliciesPage,
    ViewtermsPage,
    HomeemployeePage,
    RegemployeePage,
    RegbranchPage,
    RegproductPage,
    HomeclientPage,
    ViewemployeesPage,
    ViewclientsPage,
    ViewbranchPage,
    ViewproductPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ViewloginPage,
    RegclientPage,
    ViewpoliciesPage,
    ViewtermsPage,
    HomeemployeePage,
    RegemployeePage,
    RegbranchPage,
    RegproductPage,
    HomeclientPage,
    ViewemployeesPage,
    ViewclientsPage,
    ViewbranchPage,
    ViewproductPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
