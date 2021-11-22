import { Component, OnInit } from '@angular/core';
import { HttpAPIService } from 'src/app/services/api-service';

interface Sintoma {
  name: string,
  code: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ["./dashboard.component.css"
  ]
})
export class DashboardComponent implements OnInit {
  fiebre: Sintoma[];
  respiratoria: Sintoma[];
  sospechoso:Sintoma[];
  selectedS1?: Sintoma;

  selectedS3?: Sintoma;
  resultado:string= '';
  selectedS2?: Sintoma;



  constructor(private httpDataService: HttpAPIService) {


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

  getResult(): void {
    this.httpDataService.getResult().subscribe((response: any) => {
      this.resultado = response.body;
    });

    this.resultado = "Si soy sospechoso de Covid";
  }

}
