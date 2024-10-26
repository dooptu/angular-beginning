import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuardService {
    constructor(private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        const isAuthenticated = this.checkAuthentication();

        if (!isAuthenticated) {
            this.router.navigate(['/auth/sign-in']);
            return false;
        }
        return true;
    }

    // Check if the user is authenticated
    private checkAuthentication(): boolean {
        // Replace this logic with your authentication logic (e.g., token check)
        const token = localStorage.getItem('auth_token'); // Example check
        return !!token; // Returns true if the token exists
    }
}
