import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`

    button {
      margin-bottom: 10px;
    }

  `
  ]
})
export class MenuComponent implements OnInit {

  visibleSidebar: boolean = true;

  constructor( private router: Router,
    private primengConfig: PrimeNGConfig ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  hideSideBar() {
    this.visibleSidebar = !this.visibleSidebar;
  }

  goToDashboard() {
    this.hideSideBar();
    this.router.navigate(['./dashboards']);
  }

  goToLogin() {
    this.hideSideBar();
    this.router.navigate(['./login']);
  }

  goToRegister() {
    this.hideSideBar();
    this.router.navigate(['./register']);
  }


}
