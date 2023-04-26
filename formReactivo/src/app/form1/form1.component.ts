import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Alumno } from '../_modelo/alumno';
import { AlumnosService } from '../alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  form: FormGroup;
  empt_alumno:Alumno;
  constructor(private route: ActivatedRoute, private router: Router, private alumnosService: AlumnosService) { // Instanciamos e Inicializamos  el formulario
    this.form = new FormGroup({
      id: new FormControl(0),
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      horas_formacion: new FormControl(''),
      mayor_de_edad: new FormControl(false)
    });
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
    this.alumnosService.buscarAlumno(data['id']).subscribe(
      (data) => {
        this.empt_alumno=data;
        this.form = new FormGroup({
          id: new FormControl(this.empt_alumno.id),
          nombre: new FormControl(this.empt_alumno.nombre),
          apellidos: new FormControl(this.empt_alumno.apellidos),
          horas_formacion: new FormControl(this.empt_alumno.horas_formacion),
          mayor_de_edad: new FormControl(this.empt_alumno.mayor_de_edad)
        });
    });
    });
  }
mostrarDatos() {
  let alumno: Alumno = {
    id: this.form.value.id,
    nombre: this.form.value.nombre,
    apellidos: this.form.value.apellidos,
    horas_formacion: this.form.value.horas_formacion,
    mayor_de_edad: this.form.value.mayor_de_edad
  };
  console.log(this.form.value);
}

addModAlumno() {
  let alumno: Alumno = {
    id: this.form.value.id,
    nombre: this.form.value.nombre,
    apellidos: this.form.value.apellidos,
    horas_formacion: this.form.value.horas_formacion,
    mayor_de_edad: this.form.value.mayor_de_edad
  };
  if(alumno.id==0){
    this.alumnosService.addAlumno(alumno);
  }else{
    this.alumnosService.modificarAlumno(alumno);
  }
  this.router.navigate(['/']);
}

}
