import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';

@Component({
    selector: 'app-product-modify',
    templateUrl: './product-modify.component.html',
    styleUrls: ['./product-modify.component.css']
})
export class ProductModifyComponent implements OnInit {
    product: IProduct;
    allertVisible: boolean;
    id: number;
    model: any = {};
    loading = false;
    errorVisible = false;
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _ProductService: ProductService) { }

    ngOnInit() {

        this._route.params.subscribe(params => {
            this.id = params['id'];
            this._ProductService.getProductByID(this.id)
                .subscribe(products => {
                    this.model = products;
                }, error => {
                    this.errorVisible = true;
                    console.log(error);
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
            this._ProductService.putProduct(this.id, newProduct)
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


