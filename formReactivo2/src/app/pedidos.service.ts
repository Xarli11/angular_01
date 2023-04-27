import { Injectable } from '@angular/core';
import {Detalle} from './_modelo/detalle'
import {Pedido} from './_modelo/pedido'

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  pedido:Pedido=new Pedido(0,0,'','');
  listaPedidos:Pedido[]=[];
  constructor() { }
  addPedido(pedido:Pedido){
    this.listaPedidos.push(pedido);
  }
}

