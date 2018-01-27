import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';

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

    constructor(private _productService: ProductService) {
        this._listFilter = '';
    }

    performFiltering(filterBy): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }
}
