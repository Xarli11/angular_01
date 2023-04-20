import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncioComponent } from './incio/incio.component';
import { BlogComponent } from './blog/blog.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    IncioComponent,
    BlogComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
