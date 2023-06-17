import { Component, OnInit } from '@angular/core';
import { EventBusService } from '../../event-bus-service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.eventBusService.emitEvent('navigated to profile');
  }

}
