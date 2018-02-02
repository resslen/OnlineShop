import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './products-list.component.html'
})
export class ProductListComponent implements OnInit {
    pageTitle: 'Product List';
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFiltering(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] =  [];

    constructor(private _productService: ProductService,
                private _router: Router) {
        this._listFilter = '';
    }

    performFiltering(filterBy): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            });

    }
}
