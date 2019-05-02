import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {ViewtermsPage} from "../viewterms/viewterms";
import {ViewpoliciesPage} from "../viewpolicies/viewpolicies";
import {Http} from "@angular/http";

/**
 * Generated class for the RegclientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regclient',
  templateUrl: 'regclient.html',
})
export class RegclientPage {

  termsPage = ViewtermsPage;
  policiesPage = ViewpoliciesPage;

  estados = [];

  nombre = '';
  apellidop = '';
  apellidom = '';
  correoe = '';
  contrasena = '';
  rcontrasena = '';
  telefono = '';
  rfc = '';
  id_estado = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.getEstados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegclientPage');
  }

  onClickRegister() {
    if(this.contrasena == this.rcontrasena) {
      let postData = {
        "nombre": this.nombre,
        "apellidop": this.apellidop,
        "apellidom": this.apellidom,
        "correoe": this.correoe,
        "contrasena": this.contrasena,
        "telefono": this.telefono,
        "rfc": this.rfc,
        "nivel_usuario": 1,
        "id_estado": this.id_estado
      };
      this.http.post('/clientes/registro', postData).subscribe(data=>{
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
        title: 'Contraseña Invalida!!',
        subTitle: 'Las contraseñas no coinciden, verifica tus contraseñas.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  onClickTerms() {
    this.navCtrl.push(this.termsPage);
  }

  onClickPolicies() {
    this.navCtrl.push(this.policiesPage);
  }

  getEstados() {
    this.http.get('/estados').subscribe(data => {
      this.estados = data.json();
    }, error1 => {
      console.log("Error");
    });
  }

}
