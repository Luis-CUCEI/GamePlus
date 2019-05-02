import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the RegproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regproduct',
  templateUrl: 'regproduct.html',
})
export class RegproductPage {

  nombre = '';
  precio = '';
  fecha_lanzamiento = '';
  marca = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegproductPage');
  }

  onClickRegister(){
    let postData = {
      "nombre": this.nombre,
      "precio": this.precio,
      "fecha_lanzamiento": this.fecha_lanzamiento,
      "marca": this.marca
    };
    this.http.post('/producto/registro', postData).subscribe(data=> {
      if(data.text() == "True") {
        this.navCtrl.popToRoot();
      } else {
        const alert = this.alertCtrl.create({
          title: 'Oops!',
          subTitle: 'Error de servidor, el usuario no se a podido registrar, intentalo de nuevo mas tarde.',
          buttons: ['Aceptar']
        });
        alert.present();
      }
    }, error1 => {
      const alert = this.alertCtrl.create({
        title: 'Error Faltal!',
        subTitle: 'Error interno de servidor, El sistema no tiene acceso.',
        buttons: ['Aceptar']
      });
      alert.present();
    });
  }

}
