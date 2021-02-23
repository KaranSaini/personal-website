import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-landing-card',
  templateUrl: './landing-card-component.html',
  styleUrls: ['./landing-card.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(200),
      ])
    ]),
  ],
})
export class LandingCardComponent implements OnInit {
  imageContainer: HTMLCollection = document.getElementsByClassName(
    'container image'
  );
  constructor() {}

  ngOnInit() {
    console.log(this.imageContainer);
    setTimeout(() => {
      Array.from(this.imageContainer).forEach((item) => {
        item.classList.add('shrunk');
      });
    }, 1000);
  }
}
