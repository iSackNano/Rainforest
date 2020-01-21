import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/IProduct';
import { ProductService } from '../shared/product-service';


@Component({
    selector: 'app-home',
    templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit
{
    displayOption: boolean = false;
    products: IProduct[];
    filteredProducts: IProduct[];

    _listFilter: string;
    get listFilter(): string
    {
        return this._listFilter
    }
    set listFilter(value: string)
    {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products
    }


    constructor(private productService: ProductService) { }

    ngOnInit(): void
    {
        this.productService.getProducts().subscribe({
            next: products =>
            {
                this.products = products
                this.filteredProducts = this.products
            }

        })

    }
    toggleDisplayOption()
    {
        this.displayOption = !this.displayOption
    }

    performFilter(filterBy: string): IProduct[]
    {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((employee: IProduct) =>
            employee.Name.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

}
