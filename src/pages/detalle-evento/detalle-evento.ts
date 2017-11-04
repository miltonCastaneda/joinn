import { Component } from '@angular/core';
import  { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detalle-evento',
  templateUrl: 'detalle-evento.html',
})
export class DetalleEvento {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleEvento');
  }

}
