import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../_modelo/curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-lista',
  templateUrl: './curso-lista.component.html',
  styleUrls: ['./curso-lista.component.css']
})
export class CursoListaComponent {
  cursos: Curso[] = [];

  constructor(public cursoService: CursosService, private route: ActivatedRoute,
    private router: Router // Agregamos el servicio Router aquí
  ) { }


  ngOnInit(): void {
    let idParam = this.route.snapshot.paramMap.get('id');
    let id = idParam ? +idParam : 0; // si idParametro es nulo, asignamos 0
    this.devolverCursos();

  }

  devolverCursos(){
    return this.cursos = this.cursoService.cursos;
  }


    modificarCurso(id: number) {
      // Buscamos el curso correspondiente al ID en la lista de cursos
      let curso = this.cursos.find(c => c.id == id);

      if (curso) {
        // Si encontramos el curso, redirigimos al usuario a la página de modificación
        this.router.navigate(['/curso', id]);
      } else {
        // Si no encontramos el curso, mostramos un mensaje de error
        alert('No se ha encontrado el curso con ID ' + id);
      }
  }
  altaCurso(){

  }

}
