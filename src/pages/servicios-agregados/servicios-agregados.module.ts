import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiciosAgregados } from './servicios-agregados';

@NgModule({
  declarations: [
    ServiciosAgregados,
  ],
  imports: [
    IonicPageModule.forChild(ServiciosAgregados),
  ],
})
export class ServiciosAgregadosModule {}
