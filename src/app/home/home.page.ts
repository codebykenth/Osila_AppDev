import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  ngOnInit() {}

  constructor(
    // Needed parameter for routing to new page and authentication
    private router: Router,
    private authenthicate: AuthenticationService
  ) {}

  // Funtion for the Go by event button
  goByEvent() {
    // Go to other page when it is already authorized
    this.router.navigate(['new-page']);
  }

  // Funtion for the Authorize button
  goWithAuthorization() {
    // Set the authenticate variable to true wwhenever the Authenticate button is clicked
    this.authenthicate.authenticate = true;
  }

  // Ionic Lifecycle Events
  ionViewWillEnter() {
    console.log('You will now enter home page');
  }

  ionViewDidEnter() {
    console.log('You enter home page');
  }

  ionViewWillLeave() {
    console.log('You will now leave home page');
  }

  ionViewDidLeave() {
    console.log('You leave home page');
  }
}
