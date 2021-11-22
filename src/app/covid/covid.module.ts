import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

// Pages
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {DropdownModule} from "primeng/dropdown";

import {ButtonModule} from 'primeng/button';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';







@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    DropdownModule,
    BrowserModule,
    FormsModule,BrowserAnimationsModule,ButtonModule

  ],
  exports: [
    DashboardComponent
  ]
})
export class CovidModule { }
