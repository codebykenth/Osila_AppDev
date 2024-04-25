import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignInService } from '../signin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  username: any;

  constructor(private router: Router, private signinService: SignInService) {

  }
  ionViewWillEnter() {
    this.username = localStorage.getItem("user")
    // this.username = this.signinService.username;
    if (!localStorage.getItem("isLogin")) {
      this.router.navigate(['signin'])
    }
  }

  ngOnInit() {

  }
  logout() {
    localStorage.removeItem('isLogin')
    localStorage.removeItem('currentUser')
    localStorage.removeItem('user')

    this.router.navigate(['signin'])
  }


}
