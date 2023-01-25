import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { DataStorageService } from './data-storage.service';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cartProducts: { id: number; name: string; description: string; imgPath: string; quantity: number }[] = [];

    constructor() {}

    addToCart(product: Product) {
        let foundProduct = this.cartProducts.find((data) => product.getId() === data.id);
        if (foundProduct) {
            this.cartProducts.at(this.cartProducts.indexOf(foundProduct))!.quantity++;
        } else {
            foundProduct = {
                id: product.getId(),
                name: product.getName(),
                description: product.getDescription(),
                imgPath: product.getImgPath(),
                quantity: 1,
            };
            this.cartProducts.push(foundProduct);
        }
    }
}
