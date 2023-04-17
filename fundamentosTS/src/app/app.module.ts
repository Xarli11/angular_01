import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArraysComponent } from './arrays/arrays.component';
import { FormsModule } from '@angular/forms';
import { UnionComponent } from './union/union.component';
import { PacientePadreComponent } from './paciente-padre/paciente-padre.component';
import { PacienteHijoComponent } from './paciente-hijo/paciente-hijo.component';
import { MedicosHijoComponent } from './medicos-hijo/medicos-hijo.component';
import { MedicosPadreComponent } from './medicos-padre/medicos-padre.component';

@NgModule({
  declarations: [
    AppComponent,
    ArraysComponent,
    UnionComponent,
    PacientePadreComponent,
    PacienteHijoComponent,
    MedicosHijoComponent,
    MedicosPadreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Para poder usar el ngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
