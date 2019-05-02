import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {RegclientPage} from "../regclient/regclient";
import {HomeemployeePage} from "../homeemployee/homeemployee";
import {HomeclientPage} from "../homeclient/homeclient";

/**
 * Generated class for the ViewloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewlogin',
  templateUrl: 'viewlogin.html',
})
export class ViewloginPage {

  realToken = '';
  email = '';
  password = '';

  registerClient = RegclientPage;
  homeEmployee = HomeemployeePage;
  homeClient = HomeclientPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.realToken = this.navParams.get('token');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewloginPage');
  }

  onClickLogin() {

     let postData = {
      "correoe" : this.email,
      "contrasena" : this.password,
      "token" : this.realToken
    };

    if (this.realToken == "c0101c") {
      console.log("Client");
      this.http.post('/login', postData).subscribe(data=> {
        if(data.text() == "True") {
          this.navCtrl.setRoot(this.homeClient, {correoe: this.email})
        } else {
          const alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: 'Usuario/Contraseña Incorrectos',
            buttons: ['Aceptar']
          });
          alert.present();
        }
      }, error1 => {
        const alert = this.alertCtrl.create({
          title: 'Error  de conexion Fatal!',
          subTitle: 'Error de conexion, el sistema no responde, intentelo mas tarde.',
          buttons: ['Aceptar']
        });
        alert.present();
      });
    }

    if (this.realToken == "e0202e") {
      console.log("Client");
      this.http.post('/login', postData).subscribe(data=> {
        if(data.text() == "True") {
          this.navCtrl.setRoot(this.homeEmployee, {correoe: this.email})
        } else {
          const alert = this.alertCtrl.create({
            title: 'Oops!',
            subTitle: 'Usuario/Contraseña Incorrectos',
            buttons: ['Aceptar']
          });
          alert.present();
        }
      }, error1 => {
        const alert = this.alertCtrl.create({
          title: 'Error  de conexion Fatal!',
          subTitle: 'Error de conexion, el sistema no responde, intentelo mas tarde.',
          buttons: ['Aceptar']
        });
        alert.present();
      });
    }
  }

  onClickRegister() {
    if (this.realToken == "e0202e") {
      const alert = this.alertCtrl.create(
        {
          title: 'Oops!',
          subTitle: 'Acceso a este sitio prohibido, Ingresa como cliente.',
          buttons: ['OK'],
        }
      );
      alert.present();
    } else {
      this.navCtrl.push(this.registerClient);
    }
  }

}
