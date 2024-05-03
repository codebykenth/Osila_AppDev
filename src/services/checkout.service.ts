import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Customer, iCustomer } from 'src/app/models/user.model';
import { addDoc, collection, getFirestore, getDocs, updateDoc, doc, deleteDoc, query, or } from "firebase/firestore"
import { environment } from 'src/environments/environment';
import { AlertController, ToastController } from '@ionic/angular';
import { OrdersService } from './orders.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  orderList: Customer[] = [];

  constructor(private alertController: AlertController, private toastController: ToastController, private orderServ: OrdersService) { }


  async createOrder(order: Customer) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore(app);
    const col = collection(db, "orders");
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    try {

      if (order.cust_name == "" || order.cust_contact.toString() == "0" || order.cust_address == "") {
        await this.presentAlert("Error", "Please fill all required fields.")
      } else if (order.cust_contact.toString().length !== 10) {
        console.log(order.cust_contact.toString().length);
        console.log(order.cust_contact);

        await this.presentAlert("Error", "Contact number must be valid. Required length is 10")
      }
      else {
        const orderDoc = await addDoc(col, {
          cust_name: order.cust_name,
          cust_contact: order.cust_contact,
          cust_address: order.cust_address,
          cust_gender: [order.cust_gender],
          isVerified: order.isVerified,
          date_created: date
        });
        await this.presentToast("Order successfully added!", 2000)

      }

      // window.location.reload()

    } catch (error) {
      console.error(error)

      console.log("Incomplete field");
      await this.presentAlert("Error", "Please fill all required fields.")
    }
  }



  async presentAlert(_header: string, _message: string) {
    const alert = await this.alertController.create(
      {
        header: _header,
        message: _message,
        buttons: ['Ok'],
      }
    )
    await alert.present();
  }

  async presentToast(_message: string, _duration: number) {
    const toast = await this.toastController.create({
      message: _message,
      duration: _duration,
    });

    await toast.present();
  }
}
