import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(
    private authenthicate: AuthenticationService // To access the authenticate from authentication service
  ) {}
  time: number = 3000; // Time for how long the page will load if the promise is not an error

  // Method for returning a promise
  fetchData() {
    return new Promise((resolve, reject) => {
      if (this.authenthicate.authenticate) {
        // If authenticated
        setTimeout(() => {
          resolve('Data fetched sucessfully'); // 'Data fetched sucessfully' is returned if success
        }, this.time);
      } else {
        // If not authenticated
        reject(new Error('Failed to fetch data')); // 'Failed to fetch data' is the name of the error
      }
    });
  }
}

// Code from com lab
/*
  fetchData2() {
    return new Promise((resolve, reject) => {

      const errorCondition = false;

      if(errorCondition) {
        reject(new Error('Failed to fetch data'))
      } else {
        setTimeout(() => {
          resolve('Data fetched sucessfully');
        }, this.time);
      }
    })
  }

    loadingText: string = 'The page is loading...';
  fetchData(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Data fetched successfully.');
      }, this.time);
    });
  }
  */
