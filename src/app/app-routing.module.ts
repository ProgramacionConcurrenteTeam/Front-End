import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './covid/pages/dashboard/dashboard.component';
import { SignInComponent } from './auth/pages/sign-in/sign-in.component';
import { SignUpComponent } from './auth/pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
   ,pathMatch:"full"
  },
  {
    path: 'login',
    component: SignInComponent
    ,pathMatch:"full"
  },
  {
    path: 'register',
    component: SignUpComponent,
    pathMatch:"full"
  },
  {
    path: '**',
    redirectTo: 'dashboard'
    ,pathMatch:"full"
  }

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
