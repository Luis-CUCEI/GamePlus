import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the ViewbranchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewbranch',
  templateUrl: 'viewbranch.html',
})
export class ViewbranchPage {

  branchs = []

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.getBranchs();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewbranchPage');
  }

  getBranchs() {
    this.http.get('/sucursales').subscribe(data=> {
      this.branchs = data.json();
    }, error1 => {
      console.log("Error");
    });
  }

  onClickDetalles(i){

  }
}
