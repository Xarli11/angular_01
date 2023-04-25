import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoAltaComponent } from './curso-alta/curso-alta.component';
import { CursoListaComponent } from './curso-lista/curso-lista.component';

const routes: Routes = [

  { path: '', component: CursoListaComponent, children: [
    { path: 'alta', component: CursoAltaComponent },
    { path: 'modificacion/:id', component: CursoAltaComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
