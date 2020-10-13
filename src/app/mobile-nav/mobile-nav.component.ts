import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss']
})
export class MobileNavComponent implements OnInit {
  @Input() mobile: boolean;

  constructor() { }

  ngOnInit() {
  }

}
