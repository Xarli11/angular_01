export class Pedido{
    private _idPedido: number;
    private _idCliente: number;
    private _nombreCliente: string;
    private _total: number;
    private _precio: number;

    constructor(idPedido: number, idCliente: number, nombreCliente: string, total: number, precio: number){
        this._idPedido = idPedido;
        this._idCliente = idCliente;
        this._nombreCliente = nombreCliente;
        this._total = total;
        this._precio = precio;
    }

    public get precio(): number {
        return this._precio;
    }

    public set precio(value: number) {
        this._precio = value;
    }

    public get total(): number {
        return this._total;
    }

    public set total(value: number) {
        this._total = value;
    }

    public get nombreCliente(): string {
        return this._nombreCliente;
    }

    public set nombreCliente(value: string) {
        this._nombreCliente = value;
    }

    public get idCliente(): number {
        return this._idCliente;
    }

    public set idCliente(value: number) {
        this._idCliente = value;
    }

    public get idPedido(): number {
        return this._idPedido;
    }

    public set idPedido(value: number) {
        this._idPedido = value;
    }
}
