import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
  nombre = 'Juan';
  apellido = 'Pérez';
  edad = 25;
  // nombreCompleto = this.nombre + ' ' + this.apellido;
  nombreCompleto = `${this.nombre} ${this.apellido}`;
  getNombreCompleto() {
    return `${this.nombre} ${this.apellido}`;
  }
}
