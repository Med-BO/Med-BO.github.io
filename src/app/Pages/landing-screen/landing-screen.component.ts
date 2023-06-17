import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  displayMainScreen() {
    let element = document.querySelector('.button');
    element!.classList.add('animate__animated', 'animate__fadeOut');
    element = document.querySelector('.logo-img');
    element!.classList.add('animate__animated', 'animate__zoomOut', 'animate__slow');
    setTimeout(() =>{
      this.router.navigate(["home/profile"]);
    }, 1000);
  }

}
