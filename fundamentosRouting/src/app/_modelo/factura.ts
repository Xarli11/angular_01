export class Factura{
  _idFactura: number;
  _idCliente: number;
  _TotalFactura: number;
  _Iva: number;

  constructor(idFactura: number, idCliente: number, TotalFactura: number, Iva: number){
    this._idFactura = idFactura;
    this._idCliente = idCliente;
    this._TotalFactura = TotalFactura;
    this._Iva = Iva;
  }

  get idFactura(): number{
    return this._idFactura;
  }
  set idFactura(idFactura: number){
    this._idFactura = idFactura;
  }
  get idCliente(): number{
    return this._idCliente;
  }
  set idCliente(idCliente: number){
    this._idCliente = idCliente;
  }
  get TotalFactura(): number{
    return this._TotalFactura;
  }
  set TotalFactura(TotalFactura: number){
    this._TotalFactura = TotalFactura;
  }
  get Iva(): number{
    return this._Iva;
  }
  set Iva(Iva: number){
    this._Iva = Iva;
  }
}
