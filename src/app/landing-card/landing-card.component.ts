import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-card',
  template: `
  <div class="landing">
    <div class="container image">
      <img src="../assets/IMG_3232.jpg" alt="Karan Singh">
    </div>
    <h1>Karan Singh</h1>
    <h2>About Me: </h2>
    <p>
      Software Engineer in the DC Metro Area.
      <br>
      Hobbies: Tennis, Muay Thai
      <br>
      Interests: Music
    </p>
    <button>Contact Me!</button>
  </div>
  `,
  styleUrls: ['./landing-card.component.scss'],
  animations: []
})
export class LandingCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}

//options for landing page should be : about me, resume, contact me, projects
