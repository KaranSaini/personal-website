import { HostListener, Component, OnInit } from '@angular/core';
import {fader} from '../animations' ;

import { 
  of,
  Observable,
  Subscription, 
  fromEvent,
  BehaviorSubject,
  ReplaySubject } from 'rxjs';
import { distinctUntilChanged, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: []
})
export class ProjectsComponent implements OnInit {
  browserWindow: Window = window;
  private cards: HTMLCollection = document.getElementsByClassName('idea');

  // function for checking if an element is in the current viewport ... might turn this into a service for use with other comps
  isElementInViewPort(el: Element) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  constructor() {
  }
  
  ngOnInit() {
    //could refactor this later...animating cards in
    this.browserWindow.addEventListener('scroll', (data) => {
      const { timeStamp } = data;
      if(this.isElementInViewPort(this.cards.item(1))) {
        Array.from(this.cards).forEach((element) => {
          element.classList.add('idea-show');
        });
      }
    })
  }

}
