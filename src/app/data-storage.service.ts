import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataStorageService {
    constructor(private http: HttpClient, private cartService: CartService) {}

    addItemsToCart() {
        if (this.cartService.cartProducts && this.cartService.cartProducts.length > 0) {
            this.http.put('https://twain-labs-shop-default-rtdb.firebaseio.com/cart.json', this.cartService.cartProducts).subscribe((response) => {
                console.log(response);
            });
        } else {
            this.cartService.cartProducts = [];
        }
    }

    getItemsFromCart() {
        return this.http.get<{ id: number; name: string; description: string; imgPath: string; quantity: number }[]>(
            'https://twain-labs-shop-default-rtdb.firebaseio.com/cart.json'
        );
    }

    clearItemsFromCart() {
        return this.http.delete('https://twain-labs-shop-default-rtdb.firebaseio.com/cart.json').pipe(
            tap((response) => {
                console.log(response);
            })
        );
    }
}
