import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Crypto } from './crypto.model'; // Always remember to import the model

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Fetch the that from API
  getCrypto() {
    return this.http.get<Crypto[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
  }
}
