import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of} from 'rxjs';
import { catchError, delay, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AUTH_ENs } from '../services/apiURLs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public curUser: BehaviorSubject<any> = new BehaviorSubject<any>(null);
    public token: string = '';
    public userPermessions$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
    public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    // ------------------------------------------------------------------------------------------------------------------------------------
    constructor(
        private svcSnackbar: MatSnackBar,
        private http: HttpClient,
        private svcRouter: Router
    ) {
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    public userLogin(username: string, password: string): Observable<any> {
        let obj = {
            UserName: username,
            Password: password
        }
        return this.http.post<any>(`${AUTH_ENs.login}`, obj).pipe(
            map(res=> res.result),
            tap((t: any) => this.svcSnackbar.open(`Welcome ${t.userName}`, '', { duration: 2000 })),
            tap((res: any) => {
                let obj = {
                    username: res.userName,
                    token: res.token,
                }
                localStorage.setItem(environment.LocalStorageKey, JSON.stringify(obj));
                this.curUser.next(obj);
            }),
            catchError((res:any) => { 
                localStorage.removeItem(environment.LocalStorageKey)
                this.svcSnackbar.open(`Something went wrong`, 'Failed to login', { duration: 5000 });
                this.curUser.next(null);
                throw res;
            })
        )
        

        // return of({ token: 'xyz123', username: 'ahmed' }).pipe(tap(res => {
        //     let obj = { username: res.username, token: res.token, }
        //     localStorage.setItem(environment.LocalStorageKey, JSON.stringify(obj));
        //     this.curUser.next(obj);
        // }));
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    public appLogout(): void {
        this.curUser.next(null);
        this.svcRouter.navigate(['/login']);
        localStorage.removeItem(environment.LocalStorageKey);
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
}
