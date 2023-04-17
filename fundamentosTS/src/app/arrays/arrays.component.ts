import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit{
  saludo:string[]=["Hola","Adios","Buenos días"];
  constructor(){
this.revertir();
for(let i=0;i<this.saludo.length;i++){
  console.log(this.saludo[i]);
}
this.ordenar();
for(let i=0;i<this.saludo.length;i++){
  console.log(this.saludo[i]);
}
this.eliminar();
for(let i=0;i<this.saludo.length;i++){
  console.log(this.saludo[i]);
}
this.agregar("Buenas noches");
for(let i=0;i<this.saludo.length;i++){
  console.log(this.saludo[i]);
}
this.concat();
for(let i=0;i<this.saludo.length;i++){
  console.log(this.saludo[i]);
}

  }

  ngOnInit(): void {

  }
  revertir(){
    this.saludo.reverse();
  }
  ordenar(){
    this.saludo.sort();
  }
  eliminar(){
    this.saludo.pop();
  }
  agregar(string:string){
    this.saludo.push(string);
  }
  concat(){
    this.saludo=this.saludo.concat(["Buenas tardes","Buenas noches"]);
  }
}
