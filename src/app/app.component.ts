import {Component, OnInit} from '@angular/core';
import {ProductService} from './products/product.service';
import {ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthGuard} from './_guards';
import {AuthenticationService} from './_services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

    providers: [ ProductService ]
})
export class AppComponent implements OnInit {
    constructor(private router: Router) {}

    ngOnInit(): void {
    }

    isLogged() {
        if (localStorage.getItem('currentUser')) {
            return true;
        }else {
            return false;
        }
    }

    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/welcome']);
    }
}
