import { Injectable } from '@angular/core';
import { IProduct } from './IProduct';
import { HttpClient, JsonpClientBackend, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators'

@Injectable({
  providedIn: "root"
})
export class ProductService
{
  private productUrl = "data/product/products.json";


  constructor(private http: HttpClient)
  {

  }
  getProducts(): Observable<IProduct[]>
  {
    return this.http.get<IProduct[]>(this.productUrl).pipe
      (
        catchError(this.handleError)
      );
  }



  getProduct(id: number): Observable<IProduct | undefined>
  {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.find(p => p.ID === id))
      );
  }

  getRelatedProducts(type: string): Observable<IProduct[]>
  {
    return this.getProducts()
      .pipe(
        map((products: IProduct[]) => products.filter(p => p.type === type))
      );
  }

  private handleError(err: HttpErrorResponse)
  {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent)
    {
      errorMessage = `An error occurred: ${err.error.message}`
    }
    else
    {
      errorMessage = `Server returned code: ${err.status}, error message is : ${err.message}`
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
