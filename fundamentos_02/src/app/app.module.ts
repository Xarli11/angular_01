import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HtmlqueenComponent } from './htmlqueen/htmlqueen.component';
import { HtmlemmetComponent } from './htmlemmet/htmlemmet.component';
import { VariablesComponent } from './variables/variables.component';
import { EventosComponent } from './eventos/eventos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HtmlqueenComponent,
    HtmlemmetComponent,
    VariablesComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Biblioteca para usar el two way binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
