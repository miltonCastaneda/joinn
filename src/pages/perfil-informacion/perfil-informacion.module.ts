import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerfilInformacion } from './perfil-informacion';

@NgModule({
  declarations: [
    PerfilInformacion,
  ],
  imports: [
    IonicPageModule.forChild(PerfilInformacion),
  ],
})
export class PerfilInformacionModule {}
