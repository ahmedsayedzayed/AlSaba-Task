import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of } from 'rxjs';
import { delay, filter, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
// import { AuthService } from '../auth/auth.service';
import { HttpprogressService } from './httpprogress.service';

@Injectable({
    providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

    constructor(
        private svcProgress: HttpprogressService,
        private svcAuth: AuthService,
        private svcSnackbar: MatSnackBar,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // guarding from NgViewChangedAfterItHasBeenChecked
        setTimeout(() => this.svcProgress.onRequestStarted(), 0);
        this.svcAuth.isLoggedIn.subscribe(res => {
            const savedUser = localStorage.getItem(environment.LocalStorageKey);
            if (res && savedUser) {
                const user = JSON.parse(savedUser);
                request = request.clone({
                    setHeaders: { 
                        Authorization: `Bearer ${user.token}`,
                    }
                });
            }
        });
        return next.handle(request).pipe(
            filter(f => f instanceof HttpResponse),
            delay(500),
            tap(t => {
                this.svcProgress.onRequestFinished();
            }, e => {
                setTimeout(() => {
                        this.svcProgress.onRequestFinished();
                        this.svcSnackbar.open(e?.error?.responseException?.exceptionMessage, 'Dismiss');
                    }, 100);
                })
        );
    }
}
