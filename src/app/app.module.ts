import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProductListComponent} from './products/products-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import {WelcomeComponent} from './home/index';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/index';
import {RegisterComponent} from './register/index';
import {AuthGuard} from './_guards/index';
import {AlertService, AuthenticationService, UserService} from './_services/index';
import {JwtInterceptor} from './_helpers/index';
import {ProductCreateComponent} from './products/product-create.component';
import {ProductModifyComponent} from './products/product-modify.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {NotFoundComponent} from './_directives/notFound.component';
import {StarComponent} from './_directives/star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    ProductCreateComponent,
    ProductModifyComponent,
    NotFoundComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarRouterModule,
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
