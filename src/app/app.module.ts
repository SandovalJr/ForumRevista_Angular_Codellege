import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// importamos
import { HeaderComponent } from '../app/header/header.component';
import { bodyComponent } from '../app/body/body.component';
import { NavbarComponent } from '../app/navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, bodyComponent, NavbarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
