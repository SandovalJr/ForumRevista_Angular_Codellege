import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// importamos
import { HeaderComponent } from '../app/header/header.component';
import { bodyComponent } from '../app/body/body.component';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { RFComponent } from '../app/rectanguloForum/RF.component';
// tarjetas
import { TarjetaComponente } from '../app/Tarjetas/tarjetas.component';
import { TarjetaRosaComponent } from '../app/Tarjetas/TarjetaRosa/tarjetaRosa.component';
import { TarjetaGrisComponent } from '../app/Tarjetas/TarjetaGris/tarjetaGris.component';
import { TarjetaBlancaComponent } from '../app/Tarjetas/TarjetaBlanca/tarjetaBlanca.component';
import { TarjetaVerdeComoponent } from "../app/Tarjetas/TarjetaVerde/tarjetaVerde.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    bodyComponent,
    NavbarComponent,
    RFComponent,
    TarjetaComponente,
    TarjetaRosaComponent,
    TarjetaGrisComponent,
    TarjetaBlancaComponent,
    TarjetaVerdeComoponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
