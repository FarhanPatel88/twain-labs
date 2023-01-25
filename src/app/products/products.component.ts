import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { DataStorageService } from '../data-storage.service';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
    products!: Product[];
    constructor(private productService: ProductService, private dataStorage: DataStorageService, private cartService: CartService) {}

    ngOnInit() {
        this.products = this.productService.getProducts();
        this.dataStorage.getItemsFromCart().subscribe((data: any) => {
            if (!data) {
                this.cartService.cartProducts = [];
            } else {
                this.cartService.cartProducts = data;
            }
        });
    }

    ngOnDestroy() {
        this.dataStorage.addItemsToCart();
    }
}
