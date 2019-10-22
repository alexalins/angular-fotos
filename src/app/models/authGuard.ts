import { Injectable } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate{

    constructor(
        private userService: UserService,
        private router: Router
    ) { }


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
            if(this.userService.isLogged()){
                this.router.navigate(['user', this.userService.getUsername()])
                return false;
            }
            return true;
    }
    
}