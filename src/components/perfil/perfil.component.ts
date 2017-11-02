import { Component } from '@angular/core';

/**
 * Generated class for the Perfil component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html',
  styleUrl: 'perfil.scss'
})
export class Perfil {

  text: string;

  constructor() {
    console.log('Hello Perfil Component');
    this.text = 'Hello World';
  }

}
