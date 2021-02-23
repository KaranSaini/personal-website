import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//component imports
import { LandingCardComponent } from './landing-card/landing-card.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: LandingCardComponent, data: { animation: 'about' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'projects' } },
  // { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [BrowserAnimationsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
