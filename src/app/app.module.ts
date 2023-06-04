import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingScreenComponent } from './Pages/landing-screen/landing-screen.component';
import { ContactScreenComponent } from './Pages/contact-screen/contact-screen.component';
import { HomeScreenComponent } from './Pages/home-screen/home-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingScreenComponent,
    ContactScreenComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
