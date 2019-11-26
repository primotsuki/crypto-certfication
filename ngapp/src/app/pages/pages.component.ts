import { Component } from '@angular/core';
import { MENU_ITEMS } from './pages-menu';
import {AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['pages.component.scss'],
    templateUrl: './pages.component.html',
})
export class PagesComponent {

    constructor(private authService: AuthService,
                private router: Router) {

    }
    menu = MENU_ITEMS;

    logout(){
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
}
