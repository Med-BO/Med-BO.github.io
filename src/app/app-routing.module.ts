import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingScreenComponent } from './Pages/landing-screen/landing-screen.component';
import { ContactScreenComponent } from './Pages/contact-screen/contact-screen.component';
import { HomeScreenComponent } from './Pages/home-screen/home-screen.component';

const routes: Routes = [
  { path: '', component: LandingScreenComponent },
  { path: 'contact', component: ContactScreenComponent },
  { path: 'home', component: HomeScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
