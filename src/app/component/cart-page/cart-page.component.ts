import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  products: any = [];
  constructor(private cartService: CartService, private router: Router) { }
  total: number;

  ngOnInit(): void {
    this.products = this.cartService.getCartProducts();
    this.cartTotal();
  }

  increaseQuantity(id: string) {

    this.cartService.increaseQuanity(id);
    this.cartTotal();

  }
  decreaseQuantity(id: string) {

    this.cartService.reduceQuantity(id);
    this.products = this.cartService.getCartProducts();

    this.cartTotal();

  }

  remove(id: string) {
    this.total = 0;
    this.cartService.removeProduct(id);
    this.products = this.cartService.getCartProducts();

    this.cartTotal();

  }

  checkout(): void {
    if (this.products.length > 0) {
      this.router.navigate(['/products/checkout']);
    }
  }

  cartTotal(): void {
    this.total = 0;
    this.products.forEach((prod: Product) => {
      // tslint:disable-next-line: no-string-literal
      this.total += +(prod['totalPrice']);
    });
  }

}
