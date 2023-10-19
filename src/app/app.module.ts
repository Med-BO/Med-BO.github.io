import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { GuitarComponent } from './Pages/guitar/guitar.component';
import { CertificationsComponent } from './Pages/certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    ContactScreenComponent,
    HomeScreenComponent,
    ProfileComponent,
    EducationComponent,
    InterestsComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    IteamComponent,
    LocComponent,
    IsammComponent,
    GuitarComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
