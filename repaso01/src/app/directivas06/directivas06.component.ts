import { Component } from '@angular/core';

@Component({
  selector: 'app-directivas06',
  templateUrl: './directivas06.component.html',
  styleUrls: ['./directivas06.component.css']
})
export class Directivas06Component {
  nombre:string = 'Rodriguez Pablo';
  edad:number = 40;
  sueldos = [1700, 1600, 1900];
  horas:string[]=Object.values(horarios);
  hora:string;

  constructor() {
    this.hora = horarios.Mañana;
  }


}
enum horarios{
  Mañana="Mañana",
  Tarde="Tarde",
  Noche="Noche"
}
