import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Compras } from './compras';

@NgModule({
  declarations: [
    Compras,
  ],
  imports: [
    IonicPageModule.forChild(Compras),
  ],
})
export class ComprasModule {}
