import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './pedidos/pedidos.component';
import { DetallespedidoComponent } from './detallespedido/detallespedido.component';


const routes: Routes = [
  { path: '', component: PedidosComponent, children:
  [{ path: 'detalles/:id', component: DetallespedidoComponent }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
