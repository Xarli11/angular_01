import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ConocenosComponent } from './conocenos/conocenos.component';

const routes: Routes = [
  { path: '', component: InicioComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'conocenos', component: ConocenosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
