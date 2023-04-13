import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  num1:number=0;
  num2:number=0;
  result:number=0;
  constructor(){ }
ngOnInit(): void {

}
suma(){
  this.result=this.num1+this.num2;
  return this.result;
}
resta(){
  this.result=this.num1-this.num2;
  return this.result;
}
multiplicacion(){
  this.result=this.num1*this.num2;
  return this.result;
}
division(){
  this.result=this.num1/this.num2;
  return this.result;
}


}
