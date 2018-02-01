import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard, ProductGuard } from './_guards/index';
import {ProductListComponent} from './products/products-list.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {ProductCreateComponent} from './products/product-create.component';

const appRoutes: Routes = [
    { path: '', component: WelcomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id', component: ProductDetailComponent, canActivate: [ProductGuard] },
    { path: 'product/create', component: ProductCreateComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '**', redirectTo: 'welcome',  pathMatch: 'full' }
    ];

export const routing = RouterModule.forRoot(appRoutes);
