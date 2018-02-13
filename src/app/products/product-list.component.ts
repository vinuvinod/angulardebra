import { Component, OnInit } from "@angular/core";
import { IProducts } from "./products";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    constructor(private _productService: ProductService) {
    }

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: Boolean = false;
    filterby: string;
    products: IProducts[] = [];
    errorMessage: string;

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('am in init')
        this.getProducts();
    }

    onRatingClicked(message: string): void {
        console.log('am in onRatingClicked', message)
        this.pageTitle = this.pageTitle + message;
    }

    getProducts(): void {
        this._productService.getProducts()
            .subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
            );
    }
}