import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  login = false;
  constructor() { }
  canActivate() {
    return this.login;
  }
}
