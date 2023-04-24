import { Component } from '@angular/core';


@Component({
  selector: 'app-evento03',
  templateUrl: './evento03.component.html',
  styleUrls: ['./evento03.component.css']
})
export class Evento03Component {
  cad:string;
  cad2:string;
  constructor() {
    this.cad = 'Evento 03';
    this.cad2 = '';
  }
  cambiarCadena(){
    this.cad+=" "+ this.cad2;
  }

}
