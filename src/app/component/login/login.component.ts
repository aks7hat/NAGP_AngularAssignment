import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  // dummyEmail = 'login';
  // dummyPassword = 'password';
  login(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    if (email === 'login' && password === 'password') {
      localStorage.setItem('isUserLoggedIn', 'Yes');
      this.router.navigate(['/products/cart']);
    }
  }


}
