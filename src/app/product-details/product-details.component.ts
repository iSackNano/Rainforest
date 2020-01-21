import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product-service';
import { BasketService } from '../shared/basket-service';
import { IProduct } from '../shared/IProduct';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit
{
  product: IProduct | undefined;
  relatedProducts: IProduct[];
  errorMessage = "";
  displayImageUrl: string;
  defaultImageUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private basketService: BasketService) { }

  ngOnInit()
  {
    const param = this.route.snapshot.paramMap.get("id");
    if (param)
    {
      const id = +param;
      this.getProduct(id);

    }

  }

  getProduct(id: number)
  {
    this.productService.getProduct(id).subscribe({
      next: product =>
      {
        this.product = product;
        this.defaultImageUrl = this.product.images[0].imageUrl;
        this.displayImageUrl = this.defaultImageUrl;
        this.getRelatedProducts(this.product.type)
      },
      error: err => this.errorMessage = err,

    })
  }

  getRelatedProducts(type: string)
  {
    this.productService.getRelatedProducts(type).subscribe({
      next: products =>
      {
        this.relatedProducts = products
      }
    })
  }

  mouseEnter(id: number)
  {
    this.displayImageUrl = this.product.images[id].imageUrl
  }

  mouseLeave()
  {
    this.displayImageUrl = this.defaultImageUrl
  }

  click()
  {
    this.defaultImageUrl = this.displayImageUrl;
  }

  handleAddBasket(): void
  {
    this.basketService.addProduct(this.product.ID)
  }

  handleCheckout(): void
  {
    this.handleAddBasket()
    this.router.navigateByUrl('/basket');
  }

  handleComparisonAdd(productID: number): void
  {
    console.log(productID)
    this.basketService.addProduct(productID)
  }
}
