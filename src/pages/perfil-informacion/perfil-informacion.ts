import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-perfil-informacion',
  templateUrl: 'perfil-informacion.html',
})
export class PerfilInformacion {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilInformacion');
  }

}
