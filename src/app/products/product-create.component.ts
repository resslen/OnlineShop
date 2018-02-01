import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-product-create',
    templateUrl: './product-create.component.html',
    styleUrls: []
})
export class ProductCreateComponent implements OnInit {

    constructor(private _route: ActivatedRoute,
                private _router: Router) { }

    ngOnInit() {}

    onBack(): void {
        this._router.navigate(['/products']);
    }

}
