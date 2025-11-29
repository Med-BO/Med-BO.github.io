import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { EventBusService } from '../../event-bus-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {

  routePath: string[] = [];
  activeRoute: string|undefined = "";
  private subscription: Subscription;
  sidebarOpen: boolean = false;

  constructor(private router: Router, private eventBusService: EventBusService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = this.router.routerState.snapshot.url;
        this.updateRoutePath(route);
      }
    });
    this.subscription = this.eventBusService.getEventBus().subscribe((eventData: any) => {
      if (eventData === 'navigated to profile') {
        this.markProfileAsActiveTab();
      }
    });
  }

  updateRoutePath(route: string) {
    this.routePath = Array.from(route.split('/'));
    this.routePath.shift();
    this.activeRoute = this.routePath.pop();
    this.activeRoute = this.activeRoute!.charAt(0).toUpperCase() + this.activeRoute!.slice(1);
    this.routePath = this.routePath.map(str => str.charAt(0).toUpperCase() + str.slice(1));
  }

  ngOnInit(): void {}

  downloadResume() {
    const pdfUrl = 'assets/resume_mbo.pdf';
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
    // Close sidebar on mobile after selection
    this.sidebarOpen = false;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  markProfileAsActiveTab() {
    const elements = document.getElementsByClassName('profile-menu-item');
    const element = elements[0] as HTMLElement;
    element.style.backgroundColor = '#0074FF';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
}
