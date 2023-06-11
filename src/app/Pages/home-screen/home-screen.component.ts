import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  routePath: string[] = [];
  activeRoute: string|undefined = "";

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = this.router.routerState.snapshot.url;
        this.updateRoutePath(route);
      }
    });
  }

  updateRoutePath(route: string) {
    this.routePath = Array.from(route.split('/'));
    this.routePath.shift();
    this.activeRoute = this.routePath.pop();
    this.activeRoute = this.activeRoute!.charAt(0).toUpperCase() + this.activeRoute!.slice(1)
    this.routePath = this.routePath.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  }

  ngOnInit(): void {}
  
}
