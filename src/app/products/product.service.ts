import { Injectable} from '@angular/core';
import {IProduct} from './product';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';
import {_catch} from 'rxjs/operator/catch';
import {catchError} from 'rxjs/operators';
import {errorHandler} from '@angular/platform-browser/src/browser';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json',
    })
};

@Injectable()
export class ProductService {
    private _productURL = 'http://localhost:3000/products/';
    status: boolean;
    constructor(private _http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productURL)
            .catch(this.handleError);
    }

    postProduct (product: IProduct): Observable<IProduct> {
        return this._http.post<IProduct>(this._productURL, product, httpOptions)
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}
