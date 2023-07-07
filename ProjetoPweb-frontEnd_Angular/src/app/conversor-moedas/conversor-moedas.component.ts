import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-conversor-moedas',
  templateUrl: './conversor-moedas.component.html',
  styleUrls: ['./conversor-moedas.component.css']
})
export class ConversorMoedasComponent {

  
  
  
  formulario: any;
  valorConvertido?: number;
  visibilidadedeValorconvertido?: boolean;



  ngOnInit(): void {

    this.formulario = new FormGroup({


      valor: new FormControl(null)
    
    
    
    });


  }



}
