import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/IProduct';
import { ProductService } from '../shared/product-service';
import { BasketService } from '../shared/basket-service';
import { ToastrService } from '../shared/toastr.service';

@Component({
    selector: 'app-shopping-basket',
    templateUrl: './shopping-basket.component.html',
    styleUrls: ['./shopping-basket.component.css']
})
export class ShoppingBasketComponent implements OnInit
{
    Basket: IProduct[] = []
    recentViewed: IProduct[] = []
    frequentlyBought: IProduct[] = []
    subtotal: number = 0;
    errorMessage = "";
    basketSize: number = 0;

    get basket(): IProduct[]
    {
        this.Basket = this.basketService.getProducts()
        this.basketSize = this.basketService.getBasketSize()
        this.subtotal = this.basketService.calculateSubtotal()
        return this.Basket
    }

    constructor(private productService: ProductService,
        private basketService: BasketService,
        private toastrService: ToastrService) { }

    ngOnInit(): void
    {
        

        this.AddResentViewed(1)
        this.AddResentViewed(10)

        this.AddFrequentBought(1)
        this.AddFrequentBought(7)
        this.AddFrequentBought(8)
        this.AddFrequentBought(12)
        this.AddFrequentBought(11)
        this.AddFrequentBought(3)
    }

    AddResentViewed(id: number)
    {
        this.productService.getProduct(id).subscribe({
            next: product =>
            {
                this.recentViewed.push(product)
            },
            error: err => this.errorMessage = err,

        })
    }

    AddFrequentBought(id: number)
    {
        this.productService.getProduct(id).subscribe({
            next: product =>
            {
                this.frequentlyBought.push(product)
            },
            error: err => this.errorMessage = err,

        })
    }

    AddBasket(id: number)
    {
        this.productService.getProduct(id).subscribe({
            next: product =>
            {
                this.Basket.push(product)
            },
            error: err => this.errorMessage = err,

        })
    }

    removeProduct()
    {
        this.basketService.removeProduct()
    }
}
