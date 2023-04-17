import { Component } from '@angular/core';
import { Paciente } from '../_modelo/paciente';
import {Output, EventEmitter} from '@angular/core'; //Para poder enviar datos al padre

@Component({
  selector: 'app-paciente-hijo',
  templateUrl: './paciente-hijo.component.html',
  styleUrls: ['./paciente-hijo.component.css']
})
export class PacienteHijoComponent {
  @Output() newItemEvent = new EventEmitter<Paciente>();
  nombre:string="";
  apellidos:string="";
  dni:string="";
  telefono:string="";
  direccion:string="";
  correo:string="";
  //Constructor
  constructor(){
    this.mostrar();
  }

  //Metodos
  mostrar(){
    console.log(toString());
  }

  //Metodos para añadir
  enviarPaciente(){
    this.newItemEvent.emit(new Paciente(this.nombre, this.apellidos, this.dni, this.telefono, this.direccion, this.correo));
  }
}
