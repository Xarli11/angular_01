import { Injectable } from '@angular/core';
import { Curso, Nivel } from './_modelo/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  public cursos: Curso[] = [
    new Curso(1, 'Angular', 30, Nivel.AVANZADO),
    new Curso(2, 'React', 20, Nivel.INTERMEDIO),
    new Curso(3, 'Vue', 15, Nivel.INICIACION)
  ];

  constructor() { }


  modificarCurso(id: number, nombre: string, duracion: number, nivel:Nivel){
    const cursoModificado = this.cursos.find(curso => curso.id == id);
    if (cursoModificado) {
      let index=this.cursos.indexOf(cursoModificado);
      cursoModificado.nombre = nombre;
      cursoModificado.duracion = duracion;
      cursoModificado.nivel = nivel;
      this.cursos[index]=cursoModificado;
    }
  }
}
