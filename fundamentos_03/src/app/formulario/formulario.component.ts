import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit  {
  mail:string="";
  direccion:string="";
  telefono:string="";
  comunidad:string="madrid";
  pago:string="";
  muestra:string="";
  aceptado:boolean=false;
  constructor(){ }
  ngOnInit(): void {

  }
  mostrar(){
    this.muestra="Mail: "+this.mail+" Dirección: "+this.direccion+" Teléfono: "+this.telefono+" Comunidad: "+this.comunidad+" Pago: "+this.pago + " Aceptado: "+(this.aceptado?"Sí":"No");
  }

}
