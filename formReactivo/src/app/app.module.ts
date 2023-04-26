import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { List2Component } from './list2/list2.component'; // Importamos el módulo para formularios reactivos
import { AlumnosService } from './alumnos.service'; // Importamos el servicio
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Form1Component,
    List2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, // Importamos el módulo para formularios reactivos
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
