import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion01',
  templateUrl: './interpolacion01.component.html',
  styleUrls: ['./interpolacion01.component.css']
})
export class Interpolacion01Component {
  titulo:string;
  constructor() {
    this.titulo = 'Interpolación 01';
  }

}
