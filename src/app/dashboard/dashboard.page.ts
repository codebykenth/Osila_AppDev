import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: any;

  constructor(private modalController: ModalController, private router: Router, private isLogin: LoginService) {
    this.user = localStorage.getItem('user'); // Will get the set user from local storage
  }

  ngOnInit() {
  }

  // Will open if floating button action is clicked
  async toggleModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    })
    return await modal.present();
  };

  // Will go back to login page if clicked
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('login');
    this.router.navigate(['login'])
  }

  // Will open if notif button is clicked
  async openNotif() {
    const modal = await this.modalController.create({
      component: NotificationComponent
    })
    return await modal.present();
  };
}
