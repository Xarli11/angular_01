import { Component } from '@angular/core';

@Component({
  selector: 'app-union',
  templateUrl: './union.component.html',
  styleUrls: ['./union.component.css']
})
export class UnionComponent {
  //Union - Unión de tipos
  string_number: (string | number)[] = ["Hola", 1, "Adios", 2, "Buenos días", 3];
  ejemploNumber: number = 1|2|3|4|5|6|7|8|9|10;
  ejemploString: "Hola"|"Adios"|"Buenos días"="Hola"; //Si no se inicializa, da error
  diaCumple:number=1;
  yearCumple:number=1990;
  mes: meses= meses.junio;
  meses = Object.values(meses); //Para asignar un tipo de variable a un arraylist
  //Constructor
  constructor(){
    this.mostrar();
    console.log(this.ejemploNumber);
    console.log(this.ejemploString);
    console.log(meses[0]);
  }

  //Metodos
  mostrar(){
    let resultado="";
    for(let i=0;i<this.string_number.length;i++){
      resultado=resultado+this.string_number[i]+" ";
    }
    console.log(resultado);
  }

  //Metodos para añadir
  addString(){
    this.string_number.push(this.ejemploString);
    console.log("Añadido con exito: "+this.ejemploString);
    this.mostrar();
  }
  addNumber(){
    this.string_number.push(this.ejemploNumber);
    console.log("Añadido con exito: "+this.ejemploNumber);
    this.mostrar();
  }
  mostrarCumple(){
    return this.diaCumple+" de "+this.mes+" de "+this.yearCumple;
  }
}
enum meses{
  enero="Enero",
  febrero="Febrero",
  marzo="Marzo",
  abril="Abril",
  mayo="Mayo",
  junio="Junio",
  julio="Julio",
  agosto="Agosto",
  septiembre="Septiembre",
  octubre="Octubre",
  noviembre="Noviembre",
  diciembre="Diciembre"
}

