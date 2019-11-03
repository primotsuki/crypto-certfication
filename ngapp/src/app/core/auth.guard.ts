import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ){ }
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        const currentUser = this.authService.currentUserValue;
        if (currentUser) {
            console.log('se autentico el usuario');
            return true;
        }
        console.log('redirigiendo a login');
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url} });
        return false;
    }
}