import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../products/product.service';
import {IProduct} from '../products/product';

@Component({
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']

})
export class WelcomeComponent implements OnInit {
    products: IProduct [];
    constructor(private _productService: ProductService) {}

    ngOnInit(): void {
        this._productService.getPromotedProducts()
            .subscribe(products => {
                this.products = products;
            });
    }
}
