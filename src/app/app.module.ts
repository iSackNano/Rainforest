import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductGridComponent } from './product-grid/product-grid.component';
import { StarComponent } from './shared/star.component';
import { DetailsRouteActivatorGuard } from './product-details/details-route-activator.guard';
import { Error404Component } from './errors/404.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { HomeComponent } from './home/home.component';
import { ToastrService } from './shared/toastr.service';
import { ProductService } from './shared/product-service';




@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ProductDetailsComponent,
        ProductGridComponent,
        ProductTableComponent,
        StarComponent,
        Error404Component,
        CheckoutComponent,
        ShoppingBasketComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        RouterModule.forRoot([
            { path: "products", component: ProductListComponent },
            { path: "product/:id", component: ProductDetailsComponent, canActivate:[DetailsRouteActivatorGuard]},
            { path: "home", component: HomeComponent},
            { path: "checkout", component: CheckoutComponent},
            { path: "basket", component: ShoppingBasketComponent},
            { path: "404", component: Error404Component },
            { path: "", redirectTo: "home", pathMatch: "full" },
            { path: "**", redirectTo: "home", pathMatch: "full" }
        ]),
        FormsModule,
        CommonModule,
        HttpClientModule,
        
    ],
    providers: [
        ToastrService,
        ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
