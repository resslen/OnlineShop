import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ProductListComponent} from './products/products-list.component';
import { UserLoginRegistrationComponent } from './user/user-login-registration.component';
import { SettingsComponent } from './user/settings.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    UserLoginRegistrationComponent,
    SettingsComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
