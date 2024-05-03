import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { CheckoutPage } from '../checkout/checkout.page';
import { OrdersPage } from '../orders/orders.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'checkout',
        component: CheckoutPage,
      },
      {
        path: 'orders',
        component: OrdersPage,
      },
      {
        path: '',
        redirectTo: '/dashboard/checkout',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardPageRoutingModule { }
