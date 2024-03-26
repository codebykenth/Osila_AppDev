import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginPage } from '../login/login.page';
import { LoginService } from '../login.service';
import { DataService } from '../data.service';
import { Crypto } from '../crypto.model'; // Always remember to import the model
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currencies: Crypto[] = [];
  // valueUp: boolean = false;
  // valueDown: boolean = false;

  constructor(private data: DataService) {
  }
  ngOnInit(): void {
    this.data.getCrypto().subscribe(currency => {
      this.currencies = currency;
      console.log(currency);
    });
  }
}



