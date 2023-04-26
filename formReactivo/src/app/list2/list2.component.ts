import { Component } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { Alumno } from '../_modelo/alumno';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list2',
  templateUrl: './list2.component.html',
  styleUrls: ['./list2.component.css']
})
export class List2Component {
  alumnos: Alumno[] = [];

  constructor(private alumnosService: AlumnosService, private route: ActivatedRoute, private router: Router ) {
    this.mostrarAlumnos();
    this.alumnos=alumnosService.alumnos;
   }

  mostrarAlumnos(){
    this.alumnosService.mostrarAlumnos().subscribe(
      arrayObservable =>this.alumnos=arrayObservable //arrayObservable recibe el arrary de alumnos de dentro del observable
    );
  }
}
