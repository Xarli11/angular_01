import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos/cursos.component';
import { ListaCursosComponent } from './cursos-lista/cursos-lista.component';

const routes: Routes = [
  { path: 'cursos/:id', component:   CursosComponent },
  { path: '', component: ListaCursosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
