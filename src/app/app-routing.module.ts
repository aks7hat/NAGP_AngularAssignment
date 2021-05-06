import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { CategoryTreeComponent } from './component/category-tree/category-tree.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { LoginComponent } from './component/login/login.component';
import { ProductDetailsPageComponent } from './component/product-details-page/product-details-page.component';
import { ProductListPageComponent } from './component/product-list-page/product-list-page.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ProductsResolverResolver } from './resolver/products-resolver.resolver';


const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'products', children: [
      {
        path: '', component: ProductListPageComponent, resolve: {
          products: ProductsResolverResolver
        }
      },
      {
        path: 'product-details/:id', component: ProductDetailsPageComponent, resolve: {
          products: ProductsResolverResolver
        }
      },
      { path: 'cart', component: CartPageComponent, canActivate: [AuthGuard] },
      { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: 'tree', component: CategoryTreeComponent },
  { path: '**', component: ErrorPageComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
