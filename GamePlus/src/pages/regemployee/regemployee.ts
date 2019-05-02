import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the RegemployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regemployee',
  templateUrl: 'regemployee.html',
})
export class RegemployeePage {

  sucursales = [
  ];

  nombre = '';
  apellidop = '';
  apellidom = '';
  correoe = '';
  contrasena = '';
  rcontrasena = '';
  nivel_usuario = '';
  id_sucursal = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.getSucursales();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegemployeePage');
  }

  onClickRegister() {
    if (this.contrasena == this.rcontrasena) {
      let postData = {
        "nombre": this.nombre,
        "apellidop": this.apellidop,
        "apellidom": this.apellidom,
        "correoe": this.correoe,
        "contrasena": this.contrasena,
        "nivel_usuario": this.nivel_usuario,
        "id_sucursal": this.id_sucursal
      };
      this.http.post('/empleados/registro', postData).subscribe(data=> {
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

    } else {
     const alert = this.alertCtrl.create({
       title: 'Contraseña Invalida!',
       subTitle: 'Las Contraseñas no coiciden, verifique los datos.',
       buttons: ['Aceptar']
     });
     alert.present();
    }
  }

  getSucursales() {
    this.http.get('/sucursales').subscribe(data=> {
      this.sucursales = data.json();
    }, error1 => {
      console.log("Error")
    });
  }

}
