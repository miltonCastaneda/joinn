import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-servicios-agregados',
  templateUrl: 'servicios-agregados.html',
})
export class ServiciosAgregados {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiciosAgregados');
  }

}
