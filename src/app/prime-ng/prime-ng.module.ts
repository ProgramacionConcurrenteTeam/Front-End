import { NgModule } from '@angular/core';

// PrimeNg: ordenar los modulos alfabeticamente
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  exports: [
    ButtonModule,
    SidebarModule
  ]
})
export class PrimeNgModule { }
