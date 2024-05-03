import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { collection, deleteDoc, doc, getDocs, getFirestore, query, updateDoc } from 'firebase/firestore';
import { Customer, iCustomer } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  orderList: Customer[] = [];
  constructor(private alertController: AlertController, private toastController: ToastController) { }

  async getOrder(): Promise<iCustomer[]> {
    const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore(app);

    const q = query(collection(db, "orders"));
    const querySnapshot = await getDocs(q);

    const orders: Customer[] = []

    querySnapshot.forEach((doc) => {
      const order = doc.data() as Customer;
      order.id = doc.id;
      orders.push(order);
    });
    return orders;
  }

  async updateOrder(order: Customer) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore(app);
    const date = new Date();
    try {
      const docData = doc(db, "orders", order.id)
      if (order.cust_name == "" || order.cust_contact.toString() == "0" || order.cust_address == "") {
        await this.presentAlert("Error", "Please fill all required fields.")

      } else if (order.cust_contact.toString().length !== 10) {
        console.log(order.cust_contact.toString().length);
        console.log(order.cust_contact);

        await this.presentAlert("Error", "Contact number must be valid. Required length is 10")
      } else {
        const docRef = {
          cust_name: order.cust_name,
          cust_contact: order.cust_contact,
          cust_address: order.cust_address,
          cust_gender: [order.cust_gender],
          isVerified: order.isVerified,
          date_created: date
        }
        await updateDoc(docData, docRef)
        this.presentToast("Order successfully updated!", 2000)
      }
    } catch (error) {
      this.presentAlert("Failed", "An error has occured, please try again.")
    }
  }

  async deleteUser(order: Customer) {
    const app = initializeApp(environment.firebaseConfig);
    const db = getFirestore(app);

    try {
      const docData = doc(db, "orders", order.id);
      await deleteDoc(docData)
      this.presentToast("Order successfully deleted!", 2000)
    } catch (error) {
      console.error("Error deleting user:", error);
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
