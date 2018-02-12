import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';
import {Alert} from 'selenium-webdriver';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
    products: IProduct[];
    model: any = {};
    allertVisible: boolean;
    loading = false;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) { }

    ngOnInit(): void {
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

    createProduct(productName: string,
                  productCode: string,
                  releaseDate: string,
                  price: number,
                  description: string,
                  starRating: number,
                  imageUrl: string,
                  amount: number): void {
        this.loading = true;
        if (price < 0 || starRating < 0 || amount < 0 ) {
            this.allertVisible = true;
            this.loading = false;
        }else {
            const newProduct: IProduct = {  productName,
                                            productCode,
                                            releaseDate,
                                            price,
                                            description,
                                            starRating,
                                            imageUrl,
                                            amount} as IProduct;
            this._productService.postProduct(newProduct)
                .subscribe(
                    result => {
                        this.onBack();
                    },
                    error => {
                        this.allertVisible = true;
                        this.loading = false;
                    }
                );
        }
    }
}
