import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductServiceService } from '../services/products/product-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolverResolver implements Resolve<Product[]> {

  constructor(private readonly productService: ProductServiceService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
    return this.productService.getProducts();
  }
}
