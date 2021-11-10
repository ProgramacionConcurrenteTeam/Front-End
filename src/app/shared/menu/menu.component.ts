import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';



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

  constructor( private primengConfig: PrimeNGConfig ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  hideSideBar() {
    this.visibleSidebar = !this.visibleSidebar;
  }
}
