import { Component } from '@angular/core';
import {Pedido} from '../_modelo/pedido'
import {PedidosService} from '../pedidos.service'
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent {
  form: FormGroup;
  pedido:Pedido=new Pedido(0,0,'','');
  listaPedidos:Pedido[]=[];
  constructor(private pedidosservice:PedidosService) {
    this.form = new FormGroup({
      id_pedido: new FormControl(''),
      id_cliente: new FormControl(''),
      forma_pago: new FormControl(''),
      direccion: new FormControl(''),
    });
    this.pedido.id_pedido=this.form.value.id_pedido;
    this.pedido.id_cliente=this.form.value.id_cliente;
    this.pedido.forma_pago=this.form.value.forma_pago;
    this.pedido.direccion=this.form.value.direccion;
  }

  addPedido(){
    this.pedidosservice.addPedido(this.pedido);
  }
}
