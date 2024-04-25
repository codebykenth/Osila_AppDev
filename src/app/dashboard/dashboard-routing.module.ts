import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPage } from './dashboard.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { OthersPage } from '../others/others.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: "home",
        component: HomePage
      },
      {
        path: "about",
        component: AboutPage
      },
      {
        path: "others",
        component: OthersPage
      },
      {
        path: '',
        redirectTo: '/dashboard/home',
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
