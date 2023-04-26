import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { List2Component } from './list2/list2.component';
import { Form1Component } from './form1/form1.component';

const routes: Routes = [
  { path: '', component: List2Component, children: [
    { path: 'alta', component: Form1Component },
    { path: 'formulario/:id', component: Form1Component },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
