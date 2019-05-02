import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the ViewclientsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewclients',
  templateUrl: 'viewclients.html',
})
export class ViewclientsPage {

  clientes = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.getClients();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewclientsPage');
  }

  getClients() {
    this.http.get('/cliente').subscribe(data=> {
      this.clientes = data.json();
    }, error1 => {
      console.log("Error");
    });
  }

  onClickDetalles(i){

  }
}
