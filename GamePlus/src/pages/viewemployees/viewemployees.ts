import { Component } from '@angular/core';
import {AlertController, Events, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the ViewemployeesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewemployees',
  templateUrl: 'viewemployees.html',
})
export class ViewemployeesPage {

  employees = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public events: Events) {
    this.getEmployees();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewemployeesPage');
  }

  getEmployees(){
    this.http.get('/empleado').subscribe(data=> {
      this.employees = data.json();
    }, error1 => {
      console.log("Error");
    });
  }

  onClickDetalles(i){

  }
}
