import { Component } from '@angular/core';
import {Medico} from '../_modelo/medico';

@Component({
  selector: 'app-medicos-padre',
  templateUrl: './medicos-padre.component.html',
  styleUrls: ['./medicos-padre.component.css']
})
export class MedicosPadreComponent {
  m_empt: Medico = new Medico ("","",0,"");

}
