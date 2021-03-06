import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { Perfil } from '../pages/perfil/perfil';

//import { Servicios } from '../pages/servicios/servicios';

//import { ServicioDetalle } from '../pages/servicio-detalle/servicio-detalle';

//import { ServiciosAgregados } from '../pages/servicios-agregados/servicios-agregados';

//import { PerfilInformacion } from '../pages/perfil-informacion/perfil-informacion';

//import { Compras } from '../pages/compras/compras';

//import { Escribenos } from '../pages/escribenos/escribenos';

import { Referenciar } from '../pages/referenciar/referenciar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = Referenciar;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

 