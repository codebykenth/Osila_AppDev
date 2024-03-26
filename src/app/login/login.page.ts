import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { AlertController, ModalController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usernameIn: string = '';
  passwordIn: string = '';
  usernameArr = ['admin', 'kenth'];
  passwordArr = ['admin123', 'kenth123'];


  constructor(private router: Router, private isLogin: LoginService, private toastController: ToastController, private alertController: AlertController) { }

  ngOnInit() {
  }

  login() {
    for (let i = 0; i < this.usernameArr.length; i++) {
      if ((this.usernameIn === this.usernameArr[i]) && (this.passwordIn === this.passwordArr[i])) {
        this.isLogin.login = true;
      }
    }
    if (this.isLogin.login) {
      this.showAlert();
      this.router.navigate(['dashboard/home']);
      localStorage.setItem('user', this.usernameIn);
    } else {
      this.presentToast();
    }
  }

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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login Failed',
      duration: 2000
    });
    toast.present();
  }
}
