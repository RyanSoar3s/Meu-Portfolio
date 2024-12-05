import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { MySkillsComponent } from './components/my-skills/my-skills.component';
import { MyProjectsComponent } from './components/my-projects/my-projects.component';
import { AboutThisProjectComponent } from './components/about-this-project/about-this-project.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about-me", component: AboutMeComponent },
  { path: "skills", component: MySkillsComponent },
  { path: "my-projects", component: MyProjectsComponent },
  { path: "about-this-project", component: AboutThisProjectComponent }

];
