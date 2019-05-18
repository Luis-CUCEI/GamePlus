import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {HomePage} from "../home/home";
import {RegemployeePage} from "../regemployee/regemployee";
import {RegclientPage} from "../regclient/regclient";
import {RegbranchPage} from "../regbranch/regbranch";
import {RegproductPage} from "../regproduct/regproduct";
import {ViewemployeesPage} from "../viewemployees/viewemployees";
import {ViewclientsPage} from "../viewclients/viewclients";
import {ViewproductPage} from "../viewproduct/viewproduct";
import {ViewbranchPage} from "../viewbranch/viewbranch";

/**
 * Generated class for the HomeemployeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeemployee',
  templateUrl: 'homeemployee.html',
})
export class HomeemployeePage {

  homePage = HomePage;
  regEmployee = RegemployeePage;
  regClient = RegclientPage;
  regBranch = RegbranchPage;
  regProduct = RegproductPage;
  viewEmployees = ViewemployeesPage;
  viewClientes = ViewclientsPage;
  viewProductos = ViewproductPage;
  viewSucursales = ViewbranchPage;

  correoe = '';

  empleados = [
  ];

  sucursales = [
  ];

  id_sucursal = '';

  sucursal = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:Http,
              public events: Events,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
    this.correoe = this.navParams.get('correoe');
    this.getEmpleado();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeemployeePage');
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

  onClickRegEmployee(){
    this.empleados.filter((item)=>{
      if(item.nivel_usuario == 3) {
        this.navCtrl.push(this.regEmployee);
      } else {
        const alert = this.alertCtrl.create({
          title: 'Acceso Prohibido!',
          subTitle: 'No cuentas con los permisos necesarios, contacta al area de soporte.',
          buttons: ['Aceptar']
        });
        alert.present();
      }
    });
  }

  //Modificacion Token
  onClickRegClient(){
    this.navCtrl.push(this.regClient);
  }

  onClickRegBranch(){
    this.empleados.filter((item)=>{
      if(item.nivel_usuario == 3) {
        this.navCtrl.push(this.regBranch);
      } else {
        const alert = this.alertCtrl.create({
          title: 'Acceso Prohibido!',
          subTitle: 'No cuentas con los permisos necesarios, contacta al area de soporte.',
          buttons: ['Aceptar']
        });
        alert.present();
      }
    });
  }

  onClickRegProduct(){
    this.navCtrl.push(this.regProduct);
  }

  getEmpleado() {
    var url = '/empleado/'+this.correoe;
    this.http.get(url).subscribe(data=>{
      this.empleados = data.json();
      this.getSucursal();
    }, error1 => {
      console.log("Error");
    });
  }

  getSucursal() {
    this.empleados.filter((item)=>{
      this.id_sucursal = item.id_sucursal;
    });

    var url = '/sucursales/'+this.id_sucursal;
    this.http.get(url).subscribe( data=> {
      this.sucursales = data.json();

      this.sucursales.filter((item)=> {
        this.sucursal = item.ubicacion;
      });

    }, error1 => {
      console.log("Error")
    });
  }

  onViewEployees() {
    this.navCtrl.push(this.viewEmployees);
  }

  onViewClientes() {
    this.navCtrl.push(this.viewClientes);
  }

  onViewSucursales() {
    this.navCtrl.push(this.viewSucursales);
  }

  onViewProductos() {
    this.navCtrl.push(this.viewProductos);
  }
}
