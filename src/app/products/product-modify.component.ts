import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';

@Component({
    selector: 'app-product-modify',
    templateUrl: './product-modify.component.html',
    styleUrls: []
})
export class ProductModifyComponent implements OnInit {
    product: IProduct;
    allertVisible: boolean;
    id: number;
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _ProductService: ProductService) { }

    ngOnInit() {
        this.product = {
            _id: '',
            productName: '',
            productCode: '',
            releaseDate: '',
            price: undefined,
            description: '',
            starRating: undefined,
            imageUrl: ''};
        this._route.params.subscribe(params => {
            this.id = params['id'];
            this._ProductService.getProductByID(this.id)
                .subscribe(products => {
                    this.product = products;
                });
        });
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    updateProduct(productName: string,
                  productCode: string,
                  releaseDate: string,
                  price: number,
                  description: string,
                  starRating: number,
                  imageUrl: string ): void {
        const newProduct: IProduct = {productName , productCode, releaseDate, price, description, starRating, imageUrl} as IProduct;
        this._ProductService.putProduct(this.id, newProduct)
            .subscribe(
                result => {
                    this.onBack();
                },
                error => {
                    this.allertVisible = true;
                }
            );
    }
}


