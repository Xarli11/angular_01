import { Component, Input } from '@angular/core';
import { Producto } from '../_modelo/producto';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrls: ['./productos-list.component.css']
})
export class ProductosListComponent {
  @Input() listHijo: Producto[];

  ngOnInit(){

  }

  constructor(){
    this.listHijo = [];
  }
}
