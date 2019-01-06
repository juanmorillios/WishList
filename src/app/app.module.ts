import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Componentes
import { PendientesPage } from '../pages/pendientes/pendientes.components';
import { TerminadosPage } from '../pages/terminados/terminados.components';
import { AgregarPage } from '../pages/Agregar/agregar.components';
// Servicios
import { WishlistService } from './services/wishlist.services';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WishlistService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
