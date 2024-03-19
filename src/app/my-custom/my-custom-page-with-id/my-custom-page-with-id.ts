import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'my-custom-page-with-id.html',
})
export class MyCustomPageWithId implements OnInit {
  id: any; // To accept any values
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id'); // Change the value of ID in HTML whatever this that is inputted ID in the search bar(?)
  }
}
