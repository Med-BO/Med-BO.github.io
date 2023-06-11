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

  downloadResume() {
    const pdfUrl = 'assets/Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume-mohamed-ben-othman.pdf';
    link.click();
  }

  selectSidebarMenuItem(event: Event) {
    const elements = document.getElementsByClassName('sidebar-menu-item');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      element.style.backgroundColor = '#1E1E1E';
    }
    const clickedDiv = event.target as HTMLElement;
    clickedDiv.style.backgroundColor = '#0074FF';
  }
  
}
