import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('login') === 'true') {
      // If the user is already logged in even if the page is reloaded the authentication is set to true
      return true;
    } else {
      // Will navigate to router if the user is not logged in
      this.router.navigate(['login']);
      return false;
    }
  }
}
