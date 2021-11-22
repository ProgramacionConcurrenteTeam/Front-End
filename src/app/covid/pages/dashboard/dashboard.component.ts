import { Component, OnInit } from '@angular/core';


interface Sintoma {
  name: string,
  code: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
  `]
})
export class DashboardComponent implements OnInit {
  fiebre: Sintoma[];
  respiratoria: Sintoma[];
  sospechoso:Sintoma[];
  selectedS1?: Sintoma;

  selectedS3?: Sintoma;

  selectedS2?: Sintoma;



  constructor() {


    this.fiebre = [
      {name: 'Si tengo Fiebre', code: 'Y'},
      {name: 'No tengo Fiebre', code: 'N'},

    ];
    this.respiratoria = [
      {name: 'Si tengo Dificultad Respiratoria', code: 'YD'},
      {name: 'No tengo Dificultad Respiratoria', code: 'ND'},

    ];
    this.sospechoso = [
      {name: 'Si soy sospechoso de Covid', code: 'YS'},
      {name: 'No soy sospechoso de Covid', code: 'NS'},

    ];
  }

  ngOnInit(): void {
  }

}
