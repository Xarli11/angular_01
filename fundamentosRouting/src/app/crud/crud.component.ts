import { Component } from '@angular/core';
import { Factura } from '../_modelo/factura';
import { CRUDService } from '../crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CRUDComponent {
  idFactura: number=0;
  idCliente: number=0;
  TotalFactura: number=0;
  Iva: number=0;

  constructor(private crudService: CRUDService) {}

  addFactura(){
    this.crudService.addFactura(new Factura(this.idFactura, this.idCliente, this.TotalFactura, this.Iva));
  }
  buscarFactura(){
    return this.crudService.buscarFactura(this.idFactura);
  }
  deleteFactura(){
    this.crudService.deleteFactura(this.idFactura);
  }
  updateFactura(){
    this.crudService.updateFactura(new Factura(this.idFactura, this.idCliente, this.TotalFactura, this.Iva));
  }
  devolverListaFacturas(){
    return this.crudService.listaFacturas;
  }
}

