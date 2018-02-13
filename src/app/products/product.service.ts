import { Injectable } from "@angular/core";
import { IProducts } from "./products";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import 'rxjs/add/observable/throw';


@Injectable()

export class ProductService {
    private _producturl = './assets/products.json';
    constructor(private _http: HttpClient) { };

    getProducts(): Observable<IProducts[]> {
        return this._http.get<IProducts[]>(this._producturl)
            .do(data => console.log(JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(err: HttpErrorResponse) {
        console.log(err);
        return Observable.throw(err.message);
    }
}