import { Component } from '@angular/core';

//import { MENU_ITEMS } from './pages-menu';

import {AuthService} from '../services/auth.service';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="auth.menu_g"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {
  constructor(public auth: AuthService) {

  }
  //menu = MENU_ITEMS;
}
