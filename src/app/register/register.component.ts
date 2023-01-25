import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { LoginHttpService } from '../login-http.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
    @ViewChild('f')
    registerForm!: NgForm;
    email: string = '';
    password: string = '';
    username: string = '';

    constructor(private router: Router, private loginService: LoginService, private loginhttp: LoginHttpService) {}

    register() {
        this.loginhttp.register({
            username: this.registerForm.value.username,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password,
        });
        this.loginService.login();
        this.router.navigate(['/products']);
    }
}
