import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneWayComponent } from './one-way/one-way.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { Param1Component } from './param1/param1.component';

const routes: Routes = [
  { path: 'one-way', component: OneWayComponent},
  { path: 'two-way', component: TwoWayComponent},
  { path: 'param1/:id', component: Param1Component, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
