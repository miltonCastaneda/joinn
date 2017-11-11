import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { Perfil } from '../pages/perfil/perfil';
import { Servicios } from '../pages/servicios/servicios';
import { ServicioDetalle } from '../pages/servicio-detalle/servicio-detalle';
import { ServiciosAgregados  } from '../pages/servicios-agregados/servicios-agregados';
import { PerfilInformacion } from '../pages/perfil-informacion/perfil-informacion';
import { Compras } from '../pages/compras/compras';
import { Escribenos } from '../pages/escribenos/escribenos';



@NgModule({
  declarations: [
    MyApp,
    Perfil,
    Servicios,
    ServicioDetalle,
    ServiciosAgregados,
    PerfilInformacion,
    Compras,
    Escribenos
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
    ServicioDetalle,
    ServiciosAgregados,
    PerfilInformacion,
    Compras,
    Escribenos
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
