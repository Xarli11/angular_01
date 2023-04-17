import { Component, Input } from '@angular/core';
import {Medico} from '../_modelo/medico';

@Component({
  selector: 'app-medicos-hijo',
  templateUrl: './medicos-hijo.component.html',
  styleUrls: ['./medicos-hijo.component.css']
})
export class MedicosHijoComponent {
  @Input() m:Medico=new Medico("","",0,"");
  //Constructor
  listaMedicos: Medico[]=[];

  sendMedico(){
    this.listaMedicos.push(new Medico(this.m.nombre,this.m.apellidos,this.m.cedula,this.m.foto));
  }

}
