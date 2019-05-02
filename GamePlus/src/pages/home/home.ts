import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {ViewloginPage} from "../viewlogin/viewlogin";
import {RegclientPage} from "../regclient/regclient";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loginPage = ViewloginPage;
  registerClient = RegclientPage;

  constructor(public navCtrl: NavController,
              public http:Http,
              public alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  onClickLoginC() {
    this.navCtrl.push(this.loginPage, {token: 'c0101c'})
  }

  onClickLoginE() {
    this.navCtrl.push(this.loginPage, {token: 'e0202e'})
  }

  onClickRegisterC() {
    this.navCtrl.push(this.registerClient)
  }

}
