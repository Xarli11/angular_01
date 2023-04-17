export class Paciente{
  private _nombre: string;
  private _apellidos: string;
  private _dni: string;
  private _telefono: string;
  private _direccion: string;
  private _correo: string;

  constructor(nombre: string, apellidos: string, dni: string, telefono: string, direccion: string, correo: string){
    this._nombre = nombre;
    this._apellidos = apellidos;
    this._dni = dni;
    this._telefono = telefono;
    this._direccion = direccion;
    this._correo = correo;
  }

  get nombre(): string{
    return this._nombre;
  }
  set nombre(nombre: string){
    this._nombre = nombre;
  }
  public get apellidos(): string {
    return this._apellidos;
  }
  public set apellidos(value: string) {
    this._apellidos = value;
  }
  public get dni(): string {
    return this._dni;
  }
  public set dni(value: string) {
    this._dni = value;
  }
  public get telefono(): string {
    return this._telefono;
  }
  public set telefono(value: string) {
    this._telefono = value;
  }
  public get direccion(): string {
    return this._direccion;
  }
  public set direccion(value: string) {
    this._direccion = value;
  }
  public get correo(): string {
    return this._correo;
  }
  public set correo(value: string) {
    this._correo = value;
  }
  public toString(): string{
    return "Nombre: "+this._nombre+" Apellidos: "+this._apellidos+" DNI: "+this._dni+" Telefono: "+this._telefono+" Direccion: "+this._direccion+" Correo: "+this._correo;
  }
}
