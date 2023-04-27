export class Detalle{
    private _id_cliente:number;
    private _id_producto:number;
    private _cantidad:number;
    constructor(id_producto:number,cantidad:number,id_cliente:number){
        this._id_cliente=id_cliente;
        this._id_producto=id_producto;
        this._cantidad=cantidad;
    }
    public get id_cliente(): number {
      return this._id_cliente;
    }
    public set id_cliente(value: number) {
      this._id_cliente = value;
    }
    public get id_producto(): number {
      return this._id_producto;
    }
    public set id_producto(value: number) {
      this._id_producto = value;
    }
    public get cantidad(): number {
      return this._cantidad;
    }
    public set cantidad(value: number) {
      this._cantidad = value;
    }


}
