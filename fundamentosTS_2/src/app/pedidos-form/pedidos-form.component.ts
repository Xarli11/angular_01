// Hijo
import { Component, Output, EventEmitter } from '@angular/core';
import { Pedido } from '../_modelo/pedido';

@Component({
  selector: 'app-pedidos-form',
  templateUrl: './pedidos-form.component.html',
  styleUrls: ['./pedidos-form.component.css']
})
export class PedidosFormComponent {
  @Output() newItemEvent;
  listHijo: Pedido[]; // Lista de pedidos
  idPedido: number; // Id del pedido
  idCliente: number; // Id del cliente
  nombre: string;  // Nombre del cliente
  total: number; // Total del pedido
  precio: number; // Precio del pedido

  constructor(){
    this.newItemEvent = new EventEmitter<Pedido[]>();
    this.listHijo = []
    this.idPedido = 1;
    this.idCliente = 0;
    this.nombre = "";
    this.total = 0;
    this.precio = 0;
  }

  sendPedido(){
    this.listHijo.push(new Pedido(this.idPedido, this.idCliente, this.nombre, this.total, this.precio));
    this.idPedido++;
    this.newItemEvent.emit(this.listHijo);
  }

}
