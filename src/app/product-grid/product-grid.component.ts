import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from '../shared/basket-service';
import { IProduct } from '../shared/IProduct';



@Component({
  selector: 'product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit
{
  @Input() product: IProduct | undefined
  @Input() displayLine: boolean = false
  errorMessage: string;

  constructor(private route: ActivatedRoute,
    private basketService: BasketService) { }

  ngOnInit() { }

  handleAddBasket(): void
  {
    this.basketService.addProduct(this.product.ID)
  }
}
