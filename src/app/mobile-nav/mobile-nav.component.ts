import { Component } from '@angular/core';
import { state, style } from '@angular/animations';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent {
  status:boolean = false;
  constructor() { }

  onClick(data) {
    //testing
    console.log(data);
    this.status = !this.status;
  }
}