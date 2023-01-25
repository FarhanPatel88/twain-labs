import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private products: Product[] = [
        new Product(
            1,
            'Mechanical Keyboard',
            'A physical keyboard that uses an individual spring and switch for each key.',
            'https://keychron.in/wp-content/uploads/2022/07/keychronk8proqmkviawirelessmechanicalkeyboardformacwindowsosaprofilepbtkeycapspcbscrewinstabilizerwithhotswappablegaterongpromechanicalswitchcompatiblewithmxcherrypandakailhwithrg-1.jpg'
        ),
        new Product(
            2,
            'Gaming Mouse',
            'Gaming Mouse uses Optical sensors and also Laser Sensors for higher gaming.',
            'https://cdn.thewirecutter.com/wp-content/media/2022/04/gaming-mouse-2048px-6639.jpg?auto=webp&quality=60&crop=1.91:1&width=1200'
        ),
        new Product(
            3,
            'High Refresh Rate Monitor',
            'A monitor with the ability to refresh quickly.',
            'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/asus_360hz.jpg'
        ),
        new Product(
            4,
            'Laser Printer',
            'A printer linked to a computer producing good-quality printed material by using a laser.',
            'https://5.imimg.com/data5/NM/AK/MY-3529379/laser-printer-1000x1000.jpg'
        ),
        new Product(
            5,
            'Mouse Pad',
            'A piece of slightly resilient material on which a computer mouse is moved.',
            'https://www.printstop.co.in/images/products_gallery_images/mousepad_slider.jpg'
        ),
    ];

    constructor() {}

    getProducts() {
        return this.products.slice();
    }
}
