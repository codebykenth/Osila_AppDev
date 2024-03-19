import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authenticate = false; // Boolean variable, if authenticated or not

  constructor() {}

  canActivate() {
    return this.authenticate;
  }
}
