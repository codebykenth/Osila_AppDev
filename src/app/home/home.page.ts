import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private router: Router) {}

  // Funtion for the Go by event button
  goByEvent() {
    this.router.navigate(['my-custom/my-custom-page/2']); // Go to the specified path when clicked
  }
}
