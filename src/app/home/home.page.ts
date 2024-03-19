import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  ngOnInit() {
    // this.fetchData();
  }

  data: string = '';
  isLoading = true;
  loadingText = 'The page is loading...';

  constructor(
    // Needed parameter for routing to new page and authentication
    private router: Router,
    private authenthicate: AuthenticationService,
    private dataService: DataService
  ) {}
  // ) {
  //   dataService.fetchData1().then(success => {
  //     console.log(success);

  //   }).catch(error=>{
  //     console.log(error);

  //   }).finally(() => {
  //     console.log('Promise settled');
  //     this.isLoading = false;
  //   })

  //   Promise.all([dataService.fetchData()]).then(([data])=> {
  //     console.log(data);
  //   })

  //   let x = ['a', 'b', 'c'];
  //   let z = ['e', 'f'];
  //   let y = [...x, 'd', ...z];
  //   console.log(x);

  // }

  // async fetchData() {
  //   try {

  //     this.data = await this.dataService.fetchData();
  //     console.log(this.data);

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // Funtion for the Go by event button
  goByEvent() {
    // Go to other page when it is already authorized
    this.router.navigate(['new-page']);
  }

  // Funtion for the Authorize button
  goWithAuthorization() {
    // Set the authenticate variable to true wwhenever the Authenticate button is clicked
    this.authenthicate.authenticate = true;
  }

  // Ionic Lifecycle Events
  ionViewWillEnter() {
    console.log('You will now enter home page');
  }

  ionViewDidEnter() {
    console.log('You enter home page');
  }

  ionViewWillLeave() {
    console.log('You will now leave home page');
  }

  ionViewDidLeave() {
    console.log('You leave home page');
  }
}
