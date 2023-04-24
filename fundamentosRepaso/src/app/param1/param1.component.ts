import { Component } from '@angular/core';

@Component({
  selector: 'app-param1',
  templateUrl: './param1.component.html',
  styleUrls: ['./param1.component.css']
})
export class Param1Component {
  id: number;

  constructor(){
    this.id = 0;
  }
}
