import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interpolacion01Component } from './interpolacion01/interpolacion01.component';
import { OneWay02Component } from './one-way02/one-way02.component';
import { Evento03Component } from './evento03/evento03.component';
import { Twoway04Component } from './twoway04/twoway04.component';
import { Servicio05Component } from './servicio05/servicio05.component';
import { Directivas06Component } from './directivas06/directivas06.component';



@NgModule({
  declarations: [
    AppComponent,
    Interpolacion01Component,
    OneWay02Component,
    Evento03Component,
    Twoway04Component,
    Servicio05Component,
    Directivas06Component


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
