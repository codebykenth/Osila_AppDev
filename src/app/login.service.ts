import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router) { }
  canActivate() {
    if (localStorage.getItem('login') === 'true') {
      return true;
    } else {
      this.router.navigate(['login']); // Will navigate to login if not authenticated
      return false;
    }
  }
}
