import { EventService } from './../../event/event.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EventResponse } from 'src/app/event/event.service';
import { eventResponse } from 'src/app/event/event.mock';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events$: Observable<EventResponse[]>;
  // events: EventResponse[];

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.events$ = this.eventService.list();
    // this.events = eventResponse;
  }
}
