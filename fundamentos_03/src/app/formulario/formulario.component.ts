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
    this.muestra=this.mail+" "+this.direccion+" "+this.telefono+" "+this.comunidad+" "+this.pago+ " " +(this.aceptado?"aceptado":"no aceptado");
  }

}
