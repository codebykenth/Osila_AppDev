import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = this.loginServ.email;
  password: string = this.loginServ.password;

  constructor(private router: Router, private loginServ: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginServ.login(this.email, this.password).then(username => {
      this.loginServ.presentAlert(`Welcome, ${username}`, "Successfully logged in!")
      this.router.navigate(['dashboard/checkout'])
    }).catch(error => {
      this.loginServ.presentToast("Incorrect credentials, please try again");
    });
  }

  signup() {
    this.loginServ.signup().then(success => {
      if (success === "Success") {
        this.router.navigate(['signup'])
      }
    }).catch(error => {
      this.loginServ.presentToast("An error has occured")
    })
  }

  ionViewWillEnter() {
    if (localStorage.getItem('isLogin') === "true") {
      this.router.navigate(['dashboard/checkout'])
    }
  }
}
