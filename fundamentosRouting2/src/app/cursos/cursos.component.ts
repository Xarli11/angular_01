import { Component } from '@angular/core';
import { Curso, Nivel } from '../_modelo/curso';
import { CursoService } from '../cursos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  curso=new Curso(0,"",0, Nivel.INICIACION);
  cursos: Curso[] = [];
  niveles=Object.values(Nivel);


  constructor(private cursoService: CursoService, private route: ActivatedRoute, private router: Router) {
    this.cursos = this.cursoService.cursos;
    this.curso.id=route.snapshot.params["id"];
  }


  modificarCurso(curso: Curso){
    this.cursoService.modificarCurso(curso.id, curso.nombre, curso.duracion, curso.nivel);
    this.router.navigate(['/']);
    }
}
