import { Injectable } from '@angular/core';
import { Factura } from './_modelo/factura';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {
  listaFacturas: Factura[];
  constructor() {
    this.listaFacturas = [];
  }
  addFactura(factura:Factura){
    this.listaFacturas.push(factura);
  }
  buscarFactura(idFactura: number){
    return this.listaFacturas.find(factura => factura.idFactura == idFactura);
  }
  deleteFactura(idFactura: number){
    this.listaFacturas = this.listaFacturas.filter(factura => factura.idFactura != idFactura);
  }
  updateFactura(factura: Factura){
    let facturaEncontrada = this.buscarFactura(factura.idFactura);
    if(facturaEncontrada == undefined) return;
    else{
      let index= this.listaFacturas.indexOf(facturaEncontrada);
      facturaEncontrada.idCliente = factura.idCliente;
      facturaEncontrada.TotalFactura = factura.TotalFactura;
      facturaEncontrada.Iva = factura.Iva;
      this.listaFacturas[index] = facturaEncontrada;
    }
  }
}
