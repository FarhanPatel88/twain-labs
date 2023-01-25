import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { DataStorageService } from '../data-storage.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent {
    cartProducts: any[] = [];
    loading: boolean = true;

    constructor(private cartService: CartService, private dataStorage: DataStorageService) {}

    ngOnInit() {
        setTimeout(() => {
            this.dataStorage.getItemsFromCart().subscribe((data: any) => {
                console.log('inside');
                if (!data) {
                    this.cartProducts = [];
                } else {
                    console.log('running');
                    this.cartProducts = data;
                }
                this.loading = false;
            });
        }, 500);
    }

    ngOnDestroy() {
        this.cartService.cartProducts = this.cartProducts;
    }

    clear() {
        this.dataStorage.clearItemsFromCart().subscribe((data) => (this.cartProducts = []));
    }
}
