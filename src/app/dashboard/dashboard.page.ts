import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  user: any;

  constructor(private modalController: ModalController, private router: Router, private isLogin: LoginService) {
    this.user = localStorage.getItem('user');

  }

  ngOnInit() {
  }
  async toggleModal() {
    const modal = await this.modalController.create({
      component: ModalComponent
    })
    return await modal.present();
  };

  logout() {
    this.isLogin.login = false;
    localStorage.removeItem('user');
    this.router.navigate(['login'])
  }
}
