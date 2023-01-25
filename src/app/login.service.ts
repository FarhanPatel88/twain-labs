import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    constructor() {}

    loginStatus: Subject<boolean> = new Subject();

    login() {
        this.loginStatus.next(true);
        localStorage.setItem('loginStatus', 'true');
    }

    logout() {
        this.loginStatus.next(false);
        localStorage.setItem('loginStatus', 'false');
    }
}
