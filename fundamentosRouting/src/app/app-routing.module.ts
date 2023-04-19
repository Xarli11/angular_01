import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CRUDComponent } from './crud/crud.component';
import { InicioComponent } from './inicio/inicio.component';
import {QuienessomosComponent} from './quienessomos/quienessomos.component';

const routes: Routes = [
  { path: 'InicioComponent', component:   InicioComponent },
  { path: 'QuienessomosComponent', component: QuienessomosComponent },
  { path: 'CRUDComponent', component: CRUDComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
