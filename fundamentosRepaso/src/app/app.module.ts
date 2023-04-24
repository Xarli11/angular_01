import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { Param1Component } from './param1/param1.component';
import { Showparam1Component } from './showparam1/showparam1.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolacionComponent,
    OneWayComponent,
    TwoWayComponent,
    Param1Component,
    Showparam1Component
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
