import { Component } from '@angular/core';
import { Curso, Nivel } from '../_modelo/curso';
import { CursosService } from '../cursos.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-curso-alta',
  templateUrl: './curso-alta.component.html',
  styleUrls: ['./curso-alta.component.css']
})
export class CursoAltaComponent {
 niveles=Object.values(Nivel);
 curso:Curso=new Curso(0,"",0, Nivel.INICIACION);
  cursos: Curso[] = [];

  constructor(private cursoService: CursosService, private route: ActivatedRoute, private router: Router) {
    this.cursos = this.cursoService.cursos;
    this.curso.id=route.snapshot.params["id"];
  }
  modificarCurso(curso: Curso){
    this.cursoService.modificarCurso(curso.id, curso.nombre, curso.duracion, curso.nivel);
    this.router.navigate(['/']);
    }
  altaCurso(){
    console.log("altaCurso");
    this.curso.id=(this.cursos[this.cursos.length-1].id)+1;
    this.cursos.push(this.curso)
  }
  modifAltaCurso(){
    if(this.curso.id==undefined){
      this.altaCurso();
    }else{
      this.modificarCurso(this.curso);
    }
    this.router.navigate(['/']);
  }
}
