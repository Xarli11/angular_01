export class Detalle{
    private _id_producto:number;
    private _cantidad:number;
    constructor(id_producto:number,cantidad:number){
        this._id_producto=id_producto;
        this._cantidad=cantidad;
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
