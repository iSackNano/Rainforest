import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product-service';
import { IProduct } from '../shared/IProduct';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
    buyAgainProducts: IProduct[] =[]
    relatedProducts: IProduct[] =[]
    errorMessage = "";

    test: any[]

    constructor(private productService: ProductService) { }


    ngOnInit(): void
    {


        this.AddBuyAgainProduct(8)
        this.AddBuyAgainProduct(4)
        this.AddBuyAgainProduct(2)
        this.AddBuyAgainProduct(9)
        this.AddBuyAgainProduct(5)
        this.AddBuyAgainProduct(7)

        this.AddRelatedProduct(1)
        this.AddRelatedProduct(3)
        this.AddRelatedProduct(12)
        this.AddRelatedProduct(10)
        this.AddRelatedProduct(6)
        this.AddRelatedProduct(11)
    }

    AddBuyAgainProduct(id: number)
    {
        this.productService.getProduct(id).subscribe({
            next: product =>
            {
                this.buyAgainProducts.push(product)
            },
            error: err => this.errorMessage = err,

        })
    }
    AddRelatedProduct(id: number)
    {
        this.productService.getProduct(id).subscribe({
            next: product =>
            {
                this.relatedProducts.push(product)
            },
            error: err => this.errorMessage = err,

        })
    }


}
