import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/services/checkout.service';
import { Customer } from '../models/user.model';
import { OrdersService } from 'src/services/orders.service';
import { Timestamp } from 'firebase/firestore';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  order: Customer = new Customer();
  orderList: Customer[] = [];

  constructor(private checkoutServ: CheckoutService, private orderServ: OrdersService) { }

  ngOnInit() {
  }

  async createOrder() {
    if (this.order.id) {
      this.orderServ.updateOrder(this.order);
    } else {
      this.checkoutServ.createOrder(this.order);
    }
    this.getOrder();
    this.order = new Customer()
  }

  async getOrder() {
    this.orderList = await this.orderServ.getOrder()
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
