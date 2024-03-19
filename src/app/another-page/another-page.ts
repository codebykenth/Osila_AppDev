import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  templateUrl: './another-page.html',
})
export class AnotherPagePage {
  ngOnInit() {}
  // To have an authentication before entering the page
  constructor(
    private router: Router,
    private authenticate: AuthenticationService
  ) {}

  // Ionic Lifecycle Events
  ionViewWillEnter() {
    console.log('You will now enter another page');
  }

  ionViewDidEnter() {
    console.log('You enter another page');
  }

  ionViewWillLeave() {
    console.log('You will now leave another page');
  }

  ionViewDidLeave() {
    console.log('You leave another page');
  }
}
