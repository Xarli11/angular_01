import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-padre-hijo-h',
  templateUrl: './padre-hijo-h.component.html',
  styleUrls: ['./padre-hijo-h.component.css']
})
export class PadreHijoHComponent {
  @Output() e: EventEmitter<string> ;
  nombre_hijo:string="";

  constructor(){
    this.e = new EventEmitter<string>();
  }

  enviarNombre(){
    this.e.emit(this.nombre_hijo);
  }
}
