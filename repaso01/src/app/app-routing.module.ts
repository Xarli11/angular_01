import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Interpolacion01Component } from './interpolacion01/interpolacion01.component';
import { OneWay02Component } from './one-way02/one-way02.component';
import { Evento03Component } from './evento03/evento03.component';
import { Twoway04Component } from './twoway04/twoway04.component';
import { Servicio05Component } from './servicio05/servicio05.component';
import { Directivas06Component } from './directivas06/directivas06.component';
import { PadreHijoPComponent } from './padre-hijo-p/padre-hijo-p.component';
import { HijoPadrePComponent } from './hijo-padre-p/hijo-padre-p.component';

const routes: Routes = [
  { path: 'interpolacion01', component: Interpolacion01Component },
  { path: 'one-way02', component: OneWay02Component },
  { path: 'evento03', component: Evento03Component },
  { path: 'twoway04', component: Twoway04Component },
  { path: 'servicio05', component: Servicio05Component },
  { path: 'directivas06', component: Directivas06Component },
  { path: 'padre-hijo-p', component: PadreHijoPComponent },
  { path: 'hijo-padre-p', component: HijoPadrePComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
