import { Component, OnInit } from '@angular/core';
import { BasketService } from './shared/basket-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
    BasketAmount: number = 0;
    get basketAmount(): number
    {
        this.BasketAmount = this.basketService.getBasketSize()
        return this.BasketAmount
    }


    constructor(private basketService: BasketService)  { }

    ngOnInit(): void
    {
        
    }
}
