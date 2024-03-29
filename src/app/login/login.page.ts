import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AlertController, ToastController } from '@ionic/angular';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usernameIn: string = '';
  passwordIn: string = '';
  usernameArr = ['admin', 'kenth', 'user1'];
  passwordArr = ['admin123', 'kenth123', 'user1'];

  constructor(private router: Router, private isLogin: LoginService, private toastController: ToastController, private alertController: AlertController, private data: DataService) { }

  ngOnInit() {
  }

  // Check if username and password input is correct and equal to the elements inside username and password array
  login() {
    for (let i = 0; i < this.usernameArr.length; i++) {
      if ((this.usernameIn === this.usernameArr[i]) && (this.passwordIn === this.passwordArr[i])) {
        localStorage.setItem('user', this.usernameIn); // To be access in dashboard page
        localStorage.setItem('login', 'true');
      }
    }

    // Async
    this.data.load().then(() => {
      this.showAlert();
      this.router.navigate(['dashboard/home']); // Navigate to dashboard/home
    }
    ).catch(() => {
      this.presentToast();
    })
  }

  // Show if login is success
  async showAlert() {
    const alert = await this.alertController.create(
      {
        header: 'Login',
        subHeader: 'Status',
        message: 'Login Success!',
        buttons: ['OK']
      }
    );
    alert.present();
  }

  // Show if login is failed
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login Failed',
      duration: 2000
    });
    toast.present();
  }
}
