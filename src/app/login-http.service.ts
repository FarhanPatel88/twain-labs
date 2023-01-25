import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class LoginHttpService {
    constructor(private http: HttpClient) {}

    register(user: any) {
        this.http.post('https://twain-labs-shop-default-rtdb.firebaseio.com/users.json', user).subscribe();
    }

    login(user: any) {
        return this.http.get('https://twain-labs-shop-default-rtdb.firebaseio.com/users.json');
    }
}
