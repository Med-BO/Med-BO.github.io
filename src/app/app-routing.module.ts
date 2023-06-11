import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './Pages/landing-screen/landing-screen.component';
import { ContactScreenComponent } from './Pages/contact-screen/contact-screen.component';
import { HomeScreenComponent } from './Pages/home-screen/home-screen.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { EducationComponent } from './Pages/education/education.component';
import { InterestsComponent } from './Pages/interests/interests.component';
import { ExperienceComponent } from './Pages/experience/experience.component';
import { ProjectsComponent } from './Pages/projects/projects.component';
import { SkillsComponent } from './Pages/skills/skills.component';
import { IteamComponent } from './Pages/iteam/iteam.component';
import { LocComponent } from './Pages/loc/loc.component';
import { IsammComponent } from './Pages/isamm/isamm.component';


const routes: Routes = [
  { path: '', component: LandingScreenComponent },
  { path: 'contact', component: ContactScreenComponent },
  { 
    path: 'home', component: HomeScreenComponent,
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'education', component: EducationComponent },
      { path: 'education/iteam', component: IteamComponent },
      { path: 'education/loc', component: LocComponent },
      { path: 'education/isamm', component: IsammComponent },
      { path: 'interests', component: InterestsComponent },
      { path: 'experience', component: ExperienceComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'skills', component: SkillsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
