import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let auth;
        try {
          auth = JSON.parse(localStorage.getItem('authToken'));
        } catch (ex) {}

        if (route.routeConfig.path === 'login') {
          if (auth) {
            this.router.navigate(['/']);
            return false;
          } else {
            return true;
          }
        } else if (auth) {
          return true;
        }


        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}
