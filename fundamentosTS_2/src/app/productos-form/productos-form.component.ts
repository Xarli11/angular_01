// Padre
import { Component } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { Types } from '../_modelo/types';

@Component({
  selector: 'app-productos-form',
  templateUrl: './productos-form.component.html',
  styleUrls: ['./productos-form.component.css']
})
export class ProductosFormComponent {
  lp: Producto[];
  id: number;
  nombre: string;
  existencias: number;
  precio: number;
  tipo: Types;
  tipos: string[];

  constructor(){
    this.lp = [];
    this.id = 1;
    this.nombre = "";
    this.existencias = 0;
    this.precio = 0;
    this.tipo = Types.alimento;
    this.tipos = Object.values(Types);
  }

  ngOnInit(){

  }

  enviarProducto(){
      this.lp.push(new Producto(this.id, this.nombre, this.existencias, this.precio, this.tipo));
      this.id++;
  }

}
