import { Component } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';

@Component({
    selector: 'ngx-pages',
    styleUrls: ['pages.component.scss'],
    templateUrl: './pages.component.html',
})
export class PagesComponent {

    constructor(private authService: AuthService,
                private router: Router) {

    }
    menu: NbMenuItem[] = [
        {
            title: 'Inicio',
            icon: 'home-outline',
            link: '/pages/dashboard'
        },{
            title: 'Nueva Solicitud',
            icon: 'email-outline',
            link: '/pages/solicitudes',
            hidden: (this.getRol()==2)
        },{
            title: 'Mis Solicitudes',
            icon: 'inbox-outline',
            link: '/pages/mis_solicitudes',
            hidden: (this.getRol()==2)
        },{
            title: 'Mis certificados',
            icon: 'folder-outline',
            link: '/pages/mis_certificados'
        },{
            title: 'Validar certificado',
            icon: 'search-outline',
            link: '/pages/validar',
            hidden: (this.getRol()==3)
        },{
            title: 'Solicitudes pendientes',
            icon: 'email-outline',
            link: '/pages/pendientes',
            hidden: (this.getRol()==3)
        },{
            title: 'Emitir certificado',
            icon: 'file-add-outline',
            link: '/pages/certificar',
            hidden: (this.getRol()==3)
        },{
            title: 'Revocar certificado',
            icon: 'file-remove-outline',
            link: '/pages/revocar',
            hidden: (this.getRol()==3)
        }
    ];

    logout(){
        this.authService.logout();
        this.router.navigate(['/auth/login']);
    }
    getRol(){
        return this.authService.currentRol;
    }
}
