import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

declare const document: any;

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const a = document.createElement('a');
        a.href = state.url;

        if (this.authService.getLoggedInValue()) {
            return true;
        }

        this.authService.pathname = a.pathname;
        this.authService.queryParams = state.root.queryParams;

        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}
