import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicioDetalle } from './servicio-detalle';

@NgModule({
  declarations: [
    ServicioDetalle,
  ],
  imports: [
    IonicPageModule.forChild(ServicioDetalle),
  ],
})
export class ServicioDetalleModule {}
