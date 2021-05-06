import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  orderNow(form: NgForm): void {
    form.reset();
    alert('Your order has been placed!!! Enjoy Shopping');
    this.router.navigate(['/products']);
  }
}
