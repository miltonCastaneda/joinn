import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Perfil } from '../pages/perfil/perfil';
import { Servicios } from '../pages/servicios/servicios';
import { ServicioDetalle } from '../pages/servicio-detalle/servicio-detalle';


@NgModule({
  declarations: [
    MyApp,
    Perfil,
    Servicios,
    ServicioDetalle
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Perfil,
    Servicios,
    ServicioDetalle
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
