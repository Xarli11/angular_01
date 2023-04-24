import { Component, OnInit } from '@angular/core';
import { Servicio05Service } from '../servicio05.service';

@Component({
  selector: 'app-servicio05',
  templateUrl: './servicio05.component.html',
  styleUrls: ['./servicio05.component.css']
})
export class Servicio05Component {
  constructor(private servicio05: Servicio05Service){  }

  ngOnInit(){
    alert(this.servicio05.holamundo());
  }
}
