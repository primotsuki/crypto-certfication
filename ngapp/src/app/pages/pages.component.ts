import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['pages.component.scss'],
    template: `
        <nb-layout>
        <h3>hello world!</h3>
        <nb-menu [items]="menu"></nb-menu>
        <router-outlet></router-outlet>
        </nb-layout>
    `,
})
export class PagesComponent {
    menu = MENU_ITEMS;
}
