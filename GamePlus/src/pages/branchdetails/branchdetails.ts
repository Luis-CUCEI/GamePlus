import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the BranchdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-branchdetails',
  templateUrl: 'branchdetails.html',
})
export class BranchdetailsPage {

  estados = [
  ];
  municipios = [
  ];

  id = '';
  ubicacion = '';
  codigo_postal = '';
  id_estado = '';
  id_municipio = '';
  horario_inicio = '';
  horario_cierre = '';
  nombre_estado = '';
  nombre_municipio = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.id = this.navParams.get('id');
    this.ubicacion = this.navParams.get('ubicacion');
    this.codigo_postal = this.navParams.get('codigo_postal');
    this.id_estado = this.navParams.get('id_estado');
    this.id_municipio = this.navParams.get('id_municipio');
    this.horario_inicio = this.navParams.get('horario_inicio');
    this.horario_cierre = this.navParams.get('horario_cierre');
    this.getEstado();
    //this.getMunicipio();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BranchdetailsPage');
  }

  getEstado() {
    var url = '/estados/'+this.id_estado;
    this.http.get(url).subscribe(data=>{
      this.estados = data.json();

      this.estados.filter((item)=>{
        this.nombre_estado = item.nombre;
      });
      this.getMunicipio();
    }, error1 => {
      console.log("Error")
    });
  }

  getMunicipio() {
    var url = '/municios/get/'+this.id_municipio;
    this.http.get(url).subscribe(data=>{
      this.municipios = data.json();

      this.municipios.filter((item)=>{
        this.nombre_municipio = item.nombre;
      });
    }, error1 => {
      console.log("Error")
    });
  }

  onClickDelete(correo_electronico){

  }
}
