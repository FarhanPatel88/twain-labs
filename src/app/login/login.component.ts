import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LoginHttpService } from '../login-http.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent {
    @ViewChild('f')
    loginForm!: NgForm;
    email: string = '';
    password: string = '';
    invalidStatus: boolean = false;

    constructor(private router: Router, private loginService: LoginService, private loginhttp: LoginHttpService) {}

    login() {
        this.loginhttp.login({ email: this.loginForm.value.email, password: this.loginForm.value.password }).subscribe((users) => {
            console.log(users);
            for (const key in users) {
                if (users.hasOwnProperty(key)) {
                    const element = users[key];
                    if (element.email === this.loginForm.value.email && element.password === this.loginForm.value.password) {
                        this.loginService.login();
                        this.router.navigate(['/products']);
                    }
                }
            }
            this.loginForm.reset();
            this.invalidStatus = true;
        });
    }
}
