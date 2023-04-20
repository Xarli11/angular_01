import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { FormComponent } from './form/form.component';
import { IncioComponent } from './incio/incio.component';


const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'form', component: FormComponent },
  { path: '', component: IncioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
