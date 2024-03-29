import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginPage } from '../login/login.page';
import { LoginService } from '../login.service';
import { DataService } from '../data.service';
import { Crypto } from '../crypto.model'; // Always remember to import the model
import { AlertController, ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currencies: Crypto[] = [];

  constructor(private data: DataService, private alertController: AlertController, private router: Router, private isLogin: LoginService) { }
  // Fetch the data from api
  ngOnInit(): void {
    this.data.getCrypto().subscribe(currency => {
      this.currencies = currency; // Put the values of fetch data inside currencies array
    });
  }

  // Will show if buy button is clicked
  async buy() {
    const alert = await this.alertController.create(
      {
        header: 'Buy',
        subHeader: 'Status',
        message: 'Coin has been added to your wallet!',
        buttons: ['OK']
      }
    );
    alert.present();
  }

  // Will show if sell button is clicked
  async sell() {
    const alert = await this.alertController.create(
      {
        header: 'Sell',
        subHeader: 'Status',
        message: 'Coin has been removed to your wallet!',
        buttons: ['OK']
      }
    );
    alert.present();
  }
}



