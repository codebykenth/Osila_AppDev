import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() { }

  async closeModal() {
    await this.modalController.dismiss();
  }

  sendMessage() {
    this.showAlert();
    this.closeModal();
  }

  // Will show if message button is clicked
  async showAlert() {
    const alert = await this.alertController.create(
      {
        header: 'Send Message',
        subHeader: 'Status',
        message: 'Message successfully sent!',
        buttons: ['OK']
      }
    );
    alert.present();
  }

}
