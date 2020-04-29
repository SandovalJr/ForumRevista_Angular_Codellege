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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    bodyComponent,
    NavbarComponent,
    RFComponent,
    TarjetaComponente,
    TarjetaRosaComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
