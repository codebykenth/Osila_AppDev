import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authenticate = false; // Boolean variable

  constructor() { }

  canActivate() {
    return this.authenticate;
  }
}
