import { Component } from '@angular/core';
import { Detalle } from '../_modelo/detalle';
import { FormGroup, FormControl } from '@angular/forms';
import { PedidosService } from '../pedidos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles-pedidos',
  templateUrl: './detallespedido.component.html',
  styleUrls: ['./detallespedido.component.css']
})
export class DetallespedidoComponent {
  formDetalle: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, public pedidosService: PedidosService){
    this.formDetalle = new FormGroup({
      id_producto: new FormControl(''),
      cantidad: new FormControl('')
    })
  }

  addDetalle(){
    this.pedidosService.addCarrito(
    new Detalle(
        this.route.snapshot.params['id'],
        this.formDetalle.value.idProducto,
        this.formDetalle.value.cantidad
      ));
    this.resetForm();
  }

  resetForm(){
    this.formDetalle.get('id_producto')?.setValue('');
    this.formDetalle.get('cantidad')?.setValue('');
  }
}
