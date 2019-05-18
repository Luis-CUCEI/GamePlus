import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the ProductdetailsclientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productdetailsclient',
  templateUrl: 'productdetailsclient.html',
})
export class ProductdetailsclientPage {

  nombre = '';
  precio = '';
  fecha_lanzamiento = '';
  marca = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.nombre = this.navParams.get('nombre');
    this.precio = this.navParams.get('precio');
    this.fecha_lanzamiento = this.navParams.get('fecha_lanzamiento');
    this.marca = this.navParams.get('marca');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductdetailsclientPage');
  }

  onClickBuy(nombre){

  }

}
