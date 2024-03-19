import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPage implements OnInit {
  constructor(
    private router: Router,
    private authenticate: AuthenticationService
  ) {}

  ngOnInit() {
    this.authenticate.authenticate = false; // Initialized the variable to false since it is set to true after clicking authorize button from previous page (home page)... If this line of code is not included, then it will go to another page even if authorize button is not clicked
  }

  // Funtion for the Go by event button
  goByEvent() {
    // Go to other page when it is already authorized
    this.router.navigate(['another-page']);
  }

  // Funtion for the Authorize button
  goWithAuthorization() {
    // Set the authenticate variable to true wwhenever the Authenticate button is clicked
    this.authenticate.authenticate = true;
  }

  // Ionic Lifecycle Events
  ionViewWillEnter() {
    console.log('You will now enter new page');
  }

  ionViewDidEnter() {
    console.log('You enter new page');
  }

  ionViewWillLeave() {
    console.log('You will now leave new page');
  }

  ionViewDidLeave() {
    console.log('You leave new page');
  }
}
