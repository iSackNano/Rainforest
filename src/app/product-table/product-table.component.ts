import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../shared/IProduct';
import { BasketService } from '../shared/basket-service';

@Component({
  selector: 'product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

    @Input() product: IProduct | undefined
    errorMessage: string;

    constructor(private basketService: BasketService) { }

    ngOnInit() { }

    handleAddBasket(): void
    {
        this.basketService.addProduct(this.product.ID)
    }
}
