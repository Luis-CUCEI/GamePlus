import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the ViewproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewproduct',
  templateUrl: 'viewproduct.html',
})
export class ViewproductPage {

  productos = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.getProductos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewproductPage');
  }

  getProductos() {
    this.http.get('/producto').subscribe(data=> {
      this.productos = data.json();
    }, error1 => {
      console.log("Error");
    });
  }

  onClickDetalles(i){

  }

}
