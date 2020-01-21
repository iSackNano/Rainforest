import { Injectable } from '@angular/core';
import { ToastrService } from './toastr.service';
import { ProductService } from './product-service';
import { IProduct } from './IProduct';


@Injectable({
  providedIn: "root"
})
export class BasketService
{
  basket: IProduct[] = []
  errorMessage = "";
  subtotal: number = 0;

  constructor(private productService: ProductService, private toastr: ToastrService) { }


  getProducts(): IProduct[]
  {
    return this.basket;
  }

  addProduct(id: number)
  {
    
    this.productService.getProduct(id).subscribe({
      next: product =>
      {
        this.basket.push(product)
        this.toastr.success(product.Name + " has been added to the cart")
      },
      error: err => this.errorMessage = err,

    })
  }

  removeProduct()
  {
    this.toastr.error("Product Removed")
    this.basket.pop()
  }

  getBasketSize(): number
  {
    return this.basket.length
  }

  calculateSubtotal(): number
  {
    this.subtotal = 0
    for (var i = 0; i < this.basket.length; i++)
    {
      this.subtotal += this.basket[i].price
    }
    return Math.round(this.subtotal * 100) / 100
  }
}

