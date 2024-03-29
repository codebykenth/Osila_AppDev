import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {
    // When app is initialized it will check if the user is previously login
    if (localStorage.getItem('login') === 'true') {
      this.router.navigate(['dashboard/home']);
    } else {
      this.router.navigate(['login']);
    }
  }
}
