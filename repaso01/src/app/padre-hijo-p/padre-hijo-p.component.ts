import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-hijo-p',
  templateUrl: './padre-hijo-p.component.html',
  styleUrls: ['./padre-hijo-p.component.css']
})
export class PadreHijoPComponent {
  nombre_padre:string="";

  recibirNombre(nombre: string){
    console.log("Recibido nombre");
    console.log(nombre);
    this.nombre_padre=nombre;
  }
}
