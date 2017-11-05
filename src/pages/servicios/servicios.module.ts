import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Servicios } from './servicios';

@NgModule({
  declarations: [
    Servicios,
  ],
  imports: [
    IonicPageModule.forChild(Servicios),
  ],
})
export class ServiciosModule {}
