import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProductListComponent} from './products/products-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import {WelcomeComponent} from './home/index';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {AlertComponent} from './_directives/index';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
import {AuthGuard} from './_guards/index';
import {AlertService, AuthenticationService, UserService} from './_services/index';
import {JwtInterceptor} from './_helpers/index';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    WelcomeComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
      AuthGuard,
      AlertService,
      AuthenticationService,
      UserService,
      {
          provide: HTTP_INTERCEPTORS,
          useClass: JwtInterceptor,
          multi: true
      },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
