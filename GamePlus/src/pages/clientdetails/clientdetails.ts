import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the ClientdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientdetails',
  templateUrl: 'clientdetails.html',
})
export class ClientdetailsPage {

  estados = [
  ];

  codigo_cliente = '';
  nombre = '';
  apellido_parterno = '';
  apellido_materno = '';
  correo_electronico = '';
  telefono = '';
  rfc = '';
  id_estado = '';
  nombre_estado = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.codigo_cliente = this.navParams.get('codigo_cliente');
    this.nombre = this.navParams.get('nombre');
    this.apellido_materno = this.navParams.get('apellido_materno');
    this.apellido_parterno = this.navParams.get('apellido_paterno');
    this.correo_electronico = this.navParams.get('correo_electronico');
    this.telefono = this.navParams.get('telefono');
    this.rfc = this.navParams.get('rfc');
    this.id_estado = this.navParams.get('id_estado');
    this.getEstado();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientdetailsPage');
  }

  getEstado() {
    var url = '/estados/'+this.id_estado;
    this.http.get(url).subscribe(data=>{
      this.estados = data.json();

      this.estados.filter((item)=>{
        this.nombre_estado = item.nombre;
      })
    }, error1 => {
      console.log("Error")
    })
  }

  onClickDelete(correo_electronico){

  }
}
