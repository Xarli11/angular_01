import { Component } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../_modelo/alumno';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component {
  alumnos: Alumno[] = [];

  constructor(private alumnosService: AlumnosService) {
    this.mostrarAlumnos();
    this.alumnos=alumnosService.alumnos;
   }

  mostrarAlumnos(){
    this.alumnosService.mostrarAlumnos().subscribe(
      arrayObservable =>this.alumnos=arrayObservable //arrayObservable recibe el arrary de alumnos de dentro del observable
    );
  }
}
