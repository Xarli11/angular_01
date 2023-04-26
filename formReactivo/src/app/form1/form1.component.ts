import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Alumno } from '../_modelo/alumno';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  form: FormGroup;

  constructor() { // Instanciamos e Inicializamos  el formulario
    this.form = new FormGroup({
      id: new FormControl(0),
      nombre: new FormControl(''),
      apellidos: new FormControl(''),
      horas_formacion: new FormControl(0),
      mayor_de_edad: new FormControl(false)
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
}
