import { Component, OnInit } from '@angular/core';
import { BasketService } from '../shared/basket-service';


@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit
{
    subtotal: number = 0;
    shippingCost: number = 24.99
    grandTotal: number = 0;

    constructor(private basketService: BasketService) { }

    ngOnInit()
    {
        this.subtotal = this.basketService.calculateSubtotal()

        this.grandTotal =  Math.round((this.subtotal + this.shippingCost) * 100)/ 100
    }

}
