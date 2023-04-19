import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Importar los componentes que se van a enlazar a las rutas
import { CRUDComponent } from './crud/crud.component';
import { InicioComponent } from './inicio/inicio.component';
import {QuienessomosComponent} from './quienessomos/quienessomos.component';

const routes: Routes = [
  // Asignar un componente a una ruta
  { path: 'InicioComponent', component:   InicioComponent },
  { path: 'QuienessomosComponent', component: QuienessomosComponent },
  { path: 'CRUDComponent', component: CRUDComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
