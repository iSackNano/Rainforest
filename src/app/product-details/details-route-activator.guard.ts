import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../shared/product-service';


@Injectable({
    providedIn: 'root'
})
export class DetailsRouteActivatorGuard implements CanActivate
{
    constructor(private productService: ProductService,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
    {
/*        this.productService.getProduct(+route.params['id']).pipe(
            map(e =>
            {
                if (e)
                {
                    return true
                }

            }),
            catchError((err) =>
            {
                this.router.navigate(['/404']);
                return false;
            })
        );

        )*/
        var eventExists = false;

        eventExists = !!this.productService.getProduct(+route.params['id'])

        if (!eventExists)
        {
            this.router.navigate['/404']
        }

        return eventExists;
    }

}
