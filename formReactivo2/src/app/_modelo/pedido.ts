import { Detalle } from "./detalle";

export class Pedido{
    private _id_pedido: number;
    private _id_cliente:number;
    private _forma_pago:string;
    private _direccion:string;
    constructor(id_pedido:number,id_cliente:number,forma_pago:string,direccion:string){
        this._id_pedido=id_pedido;
        this._id_cliente=id_cliente;
        this._forma_pago=forma_pago;
        this._direccion=direccion;
    }
    public get id_pedido(): number {
      return this._id_pedido;
    }
    public set id_pedido(value: number) {
      this._id_pedido = value;
    }
    public get id_cliente(): number {
      return this._id_cliente;
    }
    public set id_cliente(value: number) {
      this._id_cliente = value;
    }
    public get forma_pago(): string {
      return this._forma_pago;
    }
    public set forma_pago(value: string) {
      this._forma_pago = value;
    }
    public get direccion(): string {
      return this._direccion;
    }
    public set direccion(value: string) {
      this._direccion = value;
    }
}
