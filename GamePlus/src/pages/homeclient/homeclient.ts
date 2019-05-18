import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {HomePage} from "../home/home";
import {ProductdetailsclientPage} from "../productdetailsclient/productdetailsclient";

/**
 * Generated class for the HomeclientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeclient',
  templateUrl: 'homeclient.html',
})
export class HomeclientPage {

  homePage = HomePage;
  productDetails = ProductdetailsclientPage;

  correoe = '';

  productos = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public events: Events,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
    this.correoe = this.navParams.get('correoe');
    this.getProductos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeclientPage');
  }

  onClickExit() {
    const alert = this.alertCtrl.create({
      title: 'Sesion Terminada',
      subTitle: 'Hasta la proxima, Vuelve pronto.',
      buttons: ['OK']
    });
    alert.present();

    let loading = this.loadingCtrl.create({
      content: 'Cerrando sesion, por favor espere.'
    });

    loading.present();

    setTimeout(() => {
      this.navCtrl.setRoot(this.homePage);
    }, 1000);

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  getProductos() {
    this.http.get('/producto').subscribe(data=> {
      this.productos = data.json();
    }, error1 => {
      console.log("Error");
    });
  }

  onClickDetalles(i){
    this.navCtrl.push(this.productDetails, i);
  }

}
