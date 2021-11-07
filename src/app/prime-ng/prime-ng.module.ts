import { NgModule } from '@angular/core';

// PrimeNg: ordenar los modulos alfabeticamente
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';


@NgModule({
  exports: [
    ButtonModule,
    MenuModule
  ]
})
export class PrimeNgModule { }
