import { Injectable, NgZone } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
// ------------------------------------------------------------------------------------------------------------------------------------ 
export class AuthGuard implements CanActivate {
    permessionsLength!: number;
    constructor(private authSVC:AuthService,private svcRouter: Router,private zone: NgZone,) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
        // console.log(route.data['permission']);
        const savedUser = localStorage.getItem(environment.LocalStorageKey);
        if (savedUser) {
            const user = JSON.parse(savedUser);
            this.authSVC.curUser.next(user)
            if (user.token) {
                this.authSVC.isLoggedIn.next(true);
                this.authSVC.token = user.token;
                if (route.data['permission'] == 'login') {
                    return this.svcRouter.navigate(['/main'])
                }
                return true;
            } else {
                this.svcRouter.navigate(['/404']);
                return false;
            }
        } else { 
            if (route.data['permission'] == 'login') { 
                return true;    
            }
            return false;
        }  
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    
}