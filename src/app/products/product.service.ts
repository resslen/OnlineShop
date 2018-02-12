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
import {AuthenticationService} from '../_services';
import {RequestOptions} from '@angular/http';
import {headersToString} from 'selenium-webdriver/http';

    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'x-access-token': JSON.parse(localStorage.getItem('currentUser'))
        })
    };

@Injectable()
export class ProductService {
    private _productURL = 'http://localhost:3000/products/';
    status: boolean;
    constructor(private _http: HttpClient,
                private authenticationService: AuthenticationService) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productURL)
            .catch(this.handleError);
    }

    getProductByID(productID: number): Observable<IProduct> {
        const url = `${this._productURL}${productID}`;
        return this._http.get<IProduct>(url, httpOptions) as Observable<IProduct>;
    }

    postProduct (product: IProduct): Observable<IProduct> {
        return this._http.post<IProduct>(this._productURL, product, httpOptions)
            .catch(this.handleError);
    }

    deleteProduct (productID: number): Observable<IProduct> {
        const url = `${this._productURL}${productID}`;
        return this._http.delete(url, httpOptions) as Observable<IProduct>;
    }

    putProduct (productID: number, product: IProduct): Observable<IProduct> {
        const url = `${this._productURL}${productID}`;
        return this._http.put<IProduct>(url, product, httpOptions);
    }

    getPromotedProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>('http://localhost:3000/products/home/promoted')
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.error(err.message);
        return Observable.throw(err.message);
    }
}
