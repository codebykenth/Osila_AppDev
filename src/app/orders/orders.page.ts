import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/services/orders.service';
import { Customer, iCustomer } from '../models/user.model';
import { CheckoutService } from 'src/services/checkout.service';
import { Timestamp, or } from 'firebase/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {
  orderList: Customer[] = [];
  isModalOpen = false;
  order: Customer = new Customer();

  constructor(private orderServ: OrdersService, private checkoutServ: CheckoutService, private alertController: AlertController) { }

  async ngOnInit() {
    // this.order.date_created. = Timestamp.now().toDate()
    this.getOrder();
  }

  async ionViewWillEnter() {
    this.getOrder();
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async getOrder() {
    this.orderList = await this.orderServ.getOrder()
  }

  async save() {
    if (this.order.id) {
      await this.orderServ.updateOrder(this.order);
    } else {
      await this.checkoutServ.createOrder(this.order);
    }
    await this.getOrder();
    this.order = new Customer()
    this.isModalOpen = false;
  }

  edit(order: iCustomer) {
    this.isModalOpen = true;
    this.order = order;
  }
  async delete(order: Customer) {
    await this.orderServ.deleteUser(order)
    this.getOrder();
    this.order = new Customer()
    this.isModalOpen = false;
  }

  async confirmDelete(order: Customer) {
    const alert = await this.alertController.create({
      header: "Confirm Delete",
      // subHeader: 'A Sub Header Is Optional',
      message: "Are you sure you want to delete the user?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'Yes',
          role: 'confirm',
          handler: async () => {
            await this.delete(order)
          },
        },
      ],
    })
    await alert.present()
  }

  toggleChanged(ev: CustomEvent) {
    const isMember = ev.detail.checked;
    if (isMember) {
      this.order.isVerified = true;
    } else {
      this.order.isVerified = false;
    }
  }

  selectChanged(ev: CustomEvent) {
    const selectedValue = ev.detail.value;
    this.order.cust_gender = selectedValue;
  }
}
