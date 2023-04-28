import { Injectable } from '@angular/core';
import { Menu } from './_modelo/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuList:Menu[] =  [
    (new Menu('home', 'Inicio', '/')), //Icono, nombrem, ruta
    (new Menu('language', 'Contacto', '/contacto')),
    (new Menu('people', 'Conocenos', '/conocenos')),
  ];
  constructor() { }
}
