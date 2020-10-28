import { HostListener, Component, OnInit } from '@angular/core';
import {fader} from '../animations' ;

import { of, Observable, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: []
})
export class ProjectsComponent implements OnInit {
  browserWindow: Window = window;
  coordinates: Observable<Event> = fromEvent(window, 'scroll');
  coordinateSub: Subscription = this.coordinates.subscribe((event: any) => {
    console.log(this.browserWindow.pageYOffset);
    this.browserWindow.scrollBy(0, 100);
  },
  (err) => {
    console.error(`something went wrong with the observable... ${err}`);
  });

  // @HostListener("window:scroll", ['$event'])
  // onScroll(event) {
  //   console.log(`the y offset is ${window.pageYOffset}`);
  // }
  constructor() { }

  ngOnInit() {
  }

}
