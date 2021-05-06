import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private productsUrl = 'assets/dummy-product-data';

  constructor(private httpclient: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    const url = `${this.productsUrl}/dummy_products.json`;
    return this.httpclient.get<Product[]>(url);
  }
}
