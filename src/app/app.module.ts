import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListPageComponent } from './component/product-list-page/product-list-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { ProductDetailsPageComponent } from './component/product-details-page/product-details-page.component';
import { SearchPipe } from './pipe/search.pipe';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { CategoryTreeComponent } from './component/category-tree/category-tree.component';
import { MatGridListModule } from '@angular/material/grid-list';


export function HttpLoaderFactory(httpCLient: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(httpCLient);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListPageComponent,
    CartPageComponent,
    ProductDetailsPageComponent,
    SearchPipe,
    CheckoutComponent,
    FooterComponent,
    HeaderComponent,
    ErrorPageComponent,
    CategoryTreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
