import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public formLogin = this.fb.group({
        email: [{value: null, disabled: false}, [Validators.required, Validators.email]],
        password: [{value: null, disabled: false}, [Validators.required]],
    });
    get isDev(): boolean { return !environment.production; }
    // ------------------------------------------------------------------------------------------------------------------------------------
    constructor(
        private fb: FormBuilder,
        private svcAuth: AuthService,
        private router: Router
    ) { }
    // ------------------------------------------------------------------------------------------------------------------------------------
    ngOnInit(): void {
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    public login(): void {
        const username: string = this.formLogin.get('email')?.value;
        const password: string = this.formLogin.get('password')?.value;
        this.svcAuth.userLogin(username, password).subscribe(
            res => {
                if (res) {
                    this.router.navigate(['/main']);
                }
            }
        );
    }
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
    // ------------------------------------------------------------------------------------------------------------------------------------
}