import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the RegbranchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regbranch',
  templateUrl: 'regbranch.html',
})
export class RegbranchPage {

  estados = [];

  municipios = [];

  ubicacion = '';
  codigo_postal = '';
  id_estado = '';
  id_municipio = '';
  horario_inicio = '';
  horario_cierre = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.getEstados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegbranchPage');
  }

  onClickRegister() {
    let postData = {
      "ubicacion": this.ubicacion,
      "codigo_postal": this.codigo_postal,
      "id_estado": this.id_estado,
      "id_municipio": this.id_municipio,
      "horario_inicio": this.horario_inicio,
      "horario_cierre": this.horario_cierre
    };
    this.http.post('/sucursal/registro', postData).subscribe(data=>{
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

  getEstados(){
    this.http.get('/estados').subscribe(data => {
      this.estados = data.json();
    }, error1 => {
      console.log("Error");
    });
  }

  getMunicipios(){
    var url = '/municios/'+this.id_estado;
    this.http.get(url).subscribe(data => {
      this.municipios = data.json();
    }, error1 => {
      console.log("Error");
    });
  }

}
