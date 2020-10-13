import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//component imports
import { LandingCardComponent } from './landing-card/landing-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path:'about', component: LandingCardComponent },
  { path:'projects', component: ProjectsComponent },
  { path:'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }