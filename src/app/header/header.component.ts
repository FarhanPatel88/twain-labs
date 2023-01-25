import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    loginStatus: boolean = localStorage.getItem('loginStatus') === 'true' ? true : false;

    constructor(private loginService: LoginService, private router: Router) {}

    ngOnInit() {
        this.loginService.loginStatus.subscribe((status: boolean) => {
            this.loginStatus = status;
        });
    }

    logout() {
        this.loginService.logout();
        this.router.navigate(['/'], { replaceUrl: true });
    }

    ngOnDestroy() {
        this.loginService.loginStatus.unsubscribe();
    }
}
