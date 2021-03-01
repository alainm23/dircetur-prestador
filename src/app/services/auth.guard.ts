import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from '@angular/fire/auth';

import { AuthService } from '../services/auth.service';
import { DatabaseService } from '../services/database.service';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router,
              private database: DatabaseService) {}

  canActivate () {
    return this.authService.isLogin ()
      .then (async (user: any) => {
        if (user) {
          return true;
        } else {
          console.log('User is not logged in');
          this.router.navigate(['/login']);
          return false;
        }
      });
  }
}
