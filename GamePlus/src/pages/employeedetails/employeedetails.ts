import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the EmployeedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-employeedetails',
  templateUrl: 'employeedetails.html',
})
export class EmployeedetailsPage {

  nombre = '';
  apellido_paterno = '';
  apellido_materno = '';
  correo_electronico = '';
  nivel_usuario = '';
  id_sucursal = '';

  nombre_sucursal = '';
  sucursales = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.nombre = this.navParams.get('nombre');
    this.apellido_paterno = this.navParams.get('apellido_paterno');
    this.apellido_materno = this.navParams.get('apellido_materno');
    this.correo_electronico = this.navParams.get('correo_electronico');
    this.nivel_usuario = this.navParams.get('nivel_usuario');
    this.id_sucursal = this.navParams.get('id_sucursal');
    this.getSucursal();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeedetailsPage');
  }

  getSucursal() {
    var url = '/sucursales/'+this.id_sucursal;
    this.http.get(url).subscribe(data=>{
      this.sucursales = data.json();

      this.sucursales.filter((item)=>{
        this.nombre_sucursal = item.ubicacion;
      })
    }, error1 => {
      console.log("Error");
    });
  }

  onClickDelete(corre_electronico) {

  }
}
