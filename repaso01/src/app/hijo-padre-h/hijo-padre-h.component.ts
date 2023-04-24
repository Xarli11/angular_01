import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-padre-h',
  templateUrl: './hijo-padre-h.component.html',
  styleUrls: ['./hijo-padre-h.component.css']
})
export class HijoPadreHComponent {
  @Input() n_hijo:string="";
  nombre_hijo:string;
  constructor() {
    this.nombre_hijo = '';
  }
}
