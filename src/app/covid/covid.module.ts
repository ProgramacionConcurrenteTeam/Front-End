import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class CovidModule { }
