import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-card',
  template: `
  <div>
    <div class="container image">
      <img src="../assets/IMG_3232.jpg" alt="Karan Singh">
    </div>
    <h1>Karan Singh</h1>
    <h2>About Me: </h2>
    <p>
      A Software Engineer in the DC Metro Area.
    </p>
  </div>
  `,
  styleUrls: ['./landing-card.component.scss']
})
export class LandingCardComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
}

//options for landing page should be : about me, resume, contact me, project