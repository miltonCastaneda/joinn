import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleEvento } from './detalle-evento';

@NgModule({
  declarations: [
    DetalleEvento,
  ],
  imports: [
    IonicPageModule.forChild(DetalleEvento),
  ],
})
export class DetalleEventoModule {}
