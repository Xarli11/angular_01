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
    const alumnoEncontrado = this.alumnos.find(alumno => alumno.id === id); // Buscamos el alumno por su id
  return alumnoEncontrado==undefined?of({id: 0, nombre: '', apellidos: '', horas_formacion: 0}):of(alumnoEncontrado);
  }
}
