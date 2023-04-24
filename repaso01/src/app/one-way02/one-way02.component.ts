import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way02',
  templateUrl: './one-way02.component.html',
  styleUrls: ['./one-way02.component.css']
})
export class OneWay02Component {
  titulo:string;
  changed:boolean;
  constructor() {
    this.titulo = 'One way 02';
    this.changed = false;
  }
  cambiarTitulo(){
    if(this.changed==false){
      this.titulo = 'One way 02 - Cambiado';
      this.changed = true;
    }
    else{
      this.titulo = 'One way 02';
      this.changed = false;
    }
  }

}
