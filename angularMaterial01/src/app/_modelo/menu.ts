export class Menu{
  _icono: string;
  _nombre:string;
  _ruta:string;
  constructor(icono:string, nombre:string, ruta:string){
    this._icono = icono;
    this._nombre = nombre;
    this._ruta = ruta;
  }
  public get icono(): string {
    return this._icono;
  }
  public set icono(value: string) {
    this._icono = value;
  }
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get ruta(): string {
    return this._ruta;
  }
  public set ruta(value: string) {
    this._ruta = value;
  }
}
