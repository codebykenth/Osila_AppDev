import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  email: string = "";
  password: string = "";
  reEnterPassword: string = "";
  time: number = 1000;

  constructor(private toastController: ToastController, private alertController: AlertController) { }

  async presentToast(messageStr: string) {
    const toast = await this.toastController.create({
      message: messageStr,
      duration: 2000
    })
    await toast.present();
  }

  async signup(email: string, password: string, reEnterPassword: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!email || !password || !reEnterPassword) {
          reject("Incomplete fields");
        }

        if (password !== reEnterPassword) {
          reject("Incorrect credentials");
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
          // sendEmailVerification(userCredential.user);
          // const user = userCredential.user;
          resolve("Success")
        }).catch((error) => {
          const errorCode = error.code;
          /*
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          */
          if (errorCode === "auth/weak-password") {
            reject("Invalid password")
          }

          if (errorCode === "auth/email-already-in-use") {
            reject("Invalid email")
          }
        })
      }, this.time);
    })

  }

  async back() {
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

  async presentAlert(headerTxt: string, messageTxt: string) {
    const alert = await this.alertController.create({
      header: headerTxt,
      message: messageTxt,
      buttons: ['Ok'],
    })
    await alert.present();
  }
}
