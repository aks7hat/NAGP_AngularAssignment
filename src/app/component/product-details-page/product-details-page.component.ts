import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.scss']
})
export class ProductDetailsPageComponent implements OnInit {

  product: any;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        this.route.params.forEach((params: Params) => {
          // tslint:disable-next-line: no-string-literal
          const productId = params['id'];
          // tslint:disable-next-line: no-string-literal
          const products = data.products.filter((prod: Product) => prod['id'] === productId);
          if (products.length > 0) {
            this.product = products[0];
          }
        });
      }
    });
  }

  addToCart(): void {
    this.cartService.addToCartProduct(this.product);
    this.router.navigate(['/products/cart']);
  }

}
