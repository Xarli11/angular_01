import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit{
  variable1;string="";
  constructor(){
    this.variable1="Hola";
    console.log(this.variable1);
  }

  ngOnInit(): void{
    this.variable1=this.variable1+", Como estas?";
    console.log(this.variable1);
  }
}
