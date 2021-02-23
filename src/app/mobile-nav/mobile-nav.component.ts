import { Component, OnInit } from "@angular/core";

import { NavigationEnd, NavigationStart, Router, RouterEvent } from "@angular/router";

import {} from "rxjs/operators";

@Component({
  selector: "app-mobile-nav",
  templateUrl: "./mobile-nav.component.html",
  styleUrls: ["./mobile-nav.component.scss"],
})
export class MobileNavComponent implements OnInit {
  constructor(private router: Router) {}
  // status starts off as true because onInit the router subscription below will change it to false
  // status: boolean = true;
  navList: HTMLCollection = document.getElementsByClassName('nav-links');
  burger: HTMLCollection = document.getElementsByClassName('burger');

  ngOnInit() {
    // to close the sidebar everytime the user navigates away from page
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart) {
        // this.status = !this.status;
        // console.log(this.status);
        this.navList[0].classList.add('nav-active');
      }
      if (event instanceof NavigationEnd) {
        this.navList[0].classList.remove('nav-active');
        this.burger[0].classList.remove('toggle');
      }
    });
  }

  onClick(data) {
    this.burger[0].classList.add('toggle');
    this.navList[0].classList.add('nav-active');
  }
}
