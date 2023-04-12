import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  template: `<button (click)='myFunction()' >Terminar</button>`
})
export class EventosComponent {
  myFunction(): void {
    alert('Ya esta terminado!');
}
}
