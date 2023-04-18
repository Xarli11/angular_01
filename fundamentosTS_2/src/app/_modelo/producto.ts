import { Types } from "./types";

export class Producto{
    private _id: number;
    private _nombre: string;
    private _existencias: number;
    private _precio: number;
    private _tipo: Types;

    constructor(id: number, nombre: string, existencias: number, precio: number, tipo: Types){
        this._id = id;
        this._nombre = nombre;
        this._existencias = existencias;
        this._precio = precio;
        this._tipo = tipo;
    }

    public get tipo(): Types {
        return this._tipo;
    }

    public set tipo(value: Types) {
        this._tipo = value;
    }

    public get precio(): number {
        return this._precio;
    }

    public set precio(value: number) {
        this._precio = value;
    }

    public get existencias(): number {
        return this._existencias;
    }

    public set existencias(value: number) {
        this._existencias = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = value;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }
}
