import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArraysComponent } from './arrays/arrays.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ArraysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //Para poder usar el ngModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
