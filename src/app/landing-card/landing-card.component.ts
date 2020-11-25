import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-card',
  templateUrl: './landing-card-component.html',
  styleUrls: ['./landing-card.component.scss'],
  animations: []
})
export class LandingCardComponent implements OnInit {
  imageContainer: HTMLCollection = document.getElementsByClassName('container image');
  constructor() { }

  ngOnInit() {
    console.log(this.imageContainer)
    setTimeout(() => {
      Array.from(this.imageContainer).forEach((item) => {
        item.classList.add('shrunk');
      });
    }, 1000);
  }
}
