import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-product-list-page',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.scss']
})
export class ProductListPageComponent implements OnInit {

  products: any = [];

  searchInputText = '';

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private cartService: CartService) { }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (data) => {
        this.products = (data.products);
      }
    });
  }
  addToCart(product: Product): void {
    this.cartService.addToCartProduct(product);
    this.router.navigate(['/products/cart']);
  }
  pdp(id: any): void {
    this.router.navigate([`/products/product-details/${id}`]);
  }

}
