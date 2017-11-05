import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-servicio-detalle',
  templateUrl: 'servicio-detalle.html',
})
export class ServicioDetalle {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicioDetalle');
  }

}
