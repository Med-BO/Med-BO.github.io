import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventBus: Subject<any> = new Subject<any>();

  emitEvent(eventData: any) {
    this.eventBus.next(eventData);
  }

  getEventBus() {
    return this.eventBus.asObservable();
  }
}
