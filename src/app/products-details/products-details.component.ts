import { Component, Input } from '@angular/core';
import { Product } from '../product.model';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-products-details',
    templateUrl: './products-details.component.html',
    styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent {
    @Input() product!: Product;
    @Input() index!: number;

    constructor(private cartService: CartService) {}

    addToCart() {
        this.cartService.addToCart(this.product);
    }
}
