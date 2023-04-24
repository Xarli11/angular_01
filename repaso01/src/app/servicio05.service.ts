import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Servicio05Service {

  constructor() { }

  holamundo(){
    return "Hola Mundo";
  }
}
