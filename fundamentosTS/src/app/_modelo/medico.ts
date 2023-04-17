export class Medico{
  private _nombre:string;
  private _apellidos:string;
  private _cedula:number;
  private _foto:string;
  //Constructor
  constructor(nombre:string, apellidos:string, cedula:number, foto:string){
    this._nombre=nombre;
    this._apellidos=apellidos;
    this._cedula=cedula;
    this._foto=foto;
  }
  //Getters
  get nombre():string{
    return this._nombre;
  }
  get apellidos():string{
    return this._apellidos;
  }
  get cedula():number{
    return this._cedula;
  }
  get foto():string{
    return this._foto;
  }
  //Setters
  set nombre(nombre:string){
    this._nombre=nombre;
  }
  set apellidos(apellidos:string){
    this._apellidos=apellidos;
  }
  set cedula(cedula:number){
    this._cedula=cedula;
  }
  set foto(foto:string){
    this._foto=foto;
  }
  //Metodos
  toString():string{
    return "Nombre: "+this._nombre+", Apellidos: "+this._apellidos+", Cedula: "+this._cedula+", Foto: "+this._foto;
  }



}
