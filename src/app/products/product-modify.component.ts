import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-product-modify',
    templateUrl: './product-modify.component.html',
    styleUrls: []
})
export class ProductModifyComponent implements OnInit {
    product: IProduct;
    constructor(private _route: ActivatedRoute,
                private _router: Router) { }

    ngOnInit() {
        const id = +this._route.snapshot.paramMap.get('id');
        this.product = {
            'productId': id,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "2016-11-24",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        };
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}
