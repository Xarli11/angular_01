import { Injectable } from '@angular/core';
import { Alumno } from './_modelo/alumno';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  alumnos: Alumno[] = [
    {id: 1, nombre: 'Juan', apellidos: 'García Pérez', horas_formacion: 20, mayor_de_edad: true},
    {id: 2, nombre: 'María', apellidos: 'González López', horas_formacion: 30, mayor_de_edad: false},
    {id: 3, nombre: 'Ana', apellidos: 'Gómez Sánchez', horas_formacion: 40, mayor_de_edad: true},
  ]  // Array de alumnos
  constructor() { }
  mostrarAlumnos(): Observable<Alumno[]> {
    return of(this.alumnos);
  }
  buscarAlumno(id: number): Observable<Alumno> {
    let alumnoEncontrado = this.alumnos.find(alumno => alumno.id == id); // Buscamos el alumno por su id
    return alumnoEncontrado==undefined? of({id: 0, nombre: '', apellidos: '', horas_formacion: 0}):of(alumnoEncontrado);
  }
  addAlumno(alumno: Alumno) {
    alumno.id=this.alumnos[this.alumnos.length-1].id+1;
    this.alumnos.push(alumno);
  }
  modificarAlumno(alumno: Alumno) {
    let alumnoEncontrado = this.alumnos.find(alumno2 => alumno2.id == alumno.id); // Buscamos el alumno por su id
    if(alumnoEncontrado){
      alumnoEncontrado.nombre=alumno.nombre;
      alumnoEncontrado.apellidos=alumno.apellidos;
      alumnoEncontrado.horas_formacion=alumno.horas_formacion;
      alumnoEncontrado.mayor_de_edad=alumno.mayor_de_edad;
    }
  }
}
