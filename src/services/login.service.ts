import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { signInWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  email: string = "";
  password: string = "";
  username: string = "";
  time: number = 1000;

  constructor(private toastController: ToastController, private alertController: AlertController) { }

  async login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then(userCredential => {
          const user = userCredential.user;

          const welcomeUser = user.email?.substring(0, user.email.indexOf("@"));
          localStorage.setItem('isLogin', "true")
          localStorage.setItem('user', `${welcomeUser}`)
          this.username = `${welcomeUser}`;
          resolve(this.username);
        }).catch(error => {
          reject(error)
        });
      }, this.time);
    })
  }

  async signup() {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve("Success")
        }, this.time);
      } catch (error) {
        reject(error)
      }
    })
  }

  async presentToast(messageStr: string) {
    const toast = await this.toastController.create({
      message: messageStr,
      duration: 2000
    })
    await toast.present();
  }

  async presentAlert(headerTxt: string, messageTxt: string) {
    const alert = await this.alertController.create({
      header: headerTxt,
      message: messageTxt,
      buttons: ['Ok'],
    })
    await alert.present();
  }
}
