import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from './product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: IProduct;
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

}
