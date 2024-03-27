import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  async closeNotif() {
    await this.modalController.dismiss();
  }
}
