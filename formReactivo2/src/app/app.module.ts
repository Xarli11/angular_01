import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetallespedidoComponent } from './detallespedido/detallespedido.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidosComponent,
    DetallespedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
