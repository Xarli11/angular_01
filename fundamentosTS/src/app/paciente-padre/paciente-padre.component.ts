import { Component } from '@angular/core';
import { Paciente } from '../_modelo/paciente';


@Component({
  selector: 'app-paciente-padre',
  templateUrl: './paciente-padre.component.html',
  styleUrls: ['./paciente-padre.component.css']
})
export class PacientePadreComponent {
  listaPacientes: Paciente[] = [];

  addPaciente(paciente: Paciente){
    this.listaPacientes.push(paciente);
    console.log("Añadido con exito: "+paciente);
  }

}
