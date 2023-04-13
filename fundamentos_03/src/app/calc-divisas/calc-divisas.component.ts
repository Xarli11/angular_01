import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calc-divisas',
  templateUrl: './calc-divisas.component.html',
  styleUrls: ['./calc-divisas.component.css']
})
export class CalcDivisasComponent implements OnInit {

  divisa:string="libra";
  num:number=0;
  resultado:number=0;
  constructor(){ }
  ngOnInit(): void {

  }
  convert(divisa:string){
    switch(divisa){
      case "jen":
        this.resultado = this.num*146.64;
        break;
      case "dolar":
        this.resultado=this.num*1.10;
        break;
      case "libra":
        this.resultado=this.num*0.88;
        break;
    }
  }
}
