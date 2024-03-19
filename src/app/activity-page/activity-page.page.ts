import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-activity-page',
  templateUrl: './activity-page.page.html',
  styleUrls: ['./activity-page.page.scss'],
})
export class ActivityPagePage {
  isLoading = false;
  loadingText = 'The page is loading...';
  numArr = [1, 2, 3];
  showNum = false;

  constructor(
    private authenthicate: AuthenticationService, // Needed to access the authenticate from authentication service
    private dataService: DataService // Needed to access the fetchData from data service
  ) {}

  // Method for getting the promise from fetchData in data service
  isAuthenticated() {
    this.isLoading = true; // The page will show loading
    this.showNum = false; // Initialize the showNum to false so the array shown in html will change everytime the add to array button is clicked. Without this line of code, the added element at the end of an array will not be shown.
    this.dataService
      .fetchData() // Get the promise from data service
      .then((success) => {
        // If success, the code below will be processed.
        console.log(success); // Show in console if the promise is success / authenticated
        this.showNum = true; // Show the array of numbers in html
        console.log(this.numArr); // Show in console the array of numbers
      })
      .catch((error) => {
        // If there is an error, the code below will be processed.
        console.log(error); // Show in console the error if not authenticated
      })
      .finally(() => {
        // console.log('Promise settled');
        this.isLoading = false; // The page will stop/hide loading whether the promise is success or not
      });
  }

  ngOnInit() {}

  // Method for setting the authenticate to true. Allowing to show and add elements in the array.
  goWithAuthorization() {
    this.authenthicate.authenticate = true;
    console.log('authenticated'); // Show in console if authenticated
  }

  // Method for showing the array
  showArray() {
    this.isAuthenticated();
  }

  // Method for showing the array and adding element to the last index of an array everytime the function is called
  addToArray() {
    this.isAuthenticated();
    if (this.authenthicate.authenticate) {
      this.numArr.push(this.numArr[this.numArr.length - 1] + 1); // Adding elements in the last index of the array
    }
  }

  // Method for setting the authenticate to false. Not allowing to show and add elements in the array.
  unAuthenticate() {
    this.authenthicate.authenticate = false;
    this.showNum = false; // Hiding the array when authenticate is false
    console.log('not authenticated'); // Show in console if not authenticated
  }
}

// Code from com lab
/*
async fetchData() {
  try {
    this.data = await this.dataService.fetchData();
    // this.data = await this.dataService.fetchData();
    console.log(this.data); // Assuming you want to log the fetched data
  } catch (error) {
    console.error(error);
  }
}
*/
