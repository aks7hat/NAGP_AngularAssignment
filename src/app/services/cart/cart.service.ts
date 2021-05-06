import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts: any = [];

  constructor() { }

  addToCartProduct(products: Product): void {
    this.cartProducts.push(products);
  }
  getCartProducts(): Product[] {
    return this.cartProducts;
  }
  increaseQuanity(id: string): void {
    // tslint:disable-next-line: no-string-literal
    const prod = this.cartProducts.filter((product: Product) => id === product['id']);
    ++prod[0].quantity;
    prod[0].totalPrice = prod[0].quantity * prod[0].price;
  }

  reduceQuantity(id: string): void {
    // tslint:disable-next-line: no-string-literal
    const prod = this.cartProducts.filter((product: Product) => id === product['id']);
    if (prod[0].quantity > 1) {
      --prod[0].quantity;
      prod[0].totalPrice = prod[0].quantity * prod[0].price;
      console.log(prod[0].price);
    }
    else {
      // tslint:disable-next-line: no-string-literal
      this.cartProducts = this.cartProducts.filter((product: Product) => id !== product['id']);
    }
  }

  removeProduct(id: string) {
    // tslint:disable-next-line: no-string-literal
    this.cartProducts = this.cartProducts.filter((product: Product) => id !== product['id']);
  }
}
