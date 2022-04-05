import { EventService } from './../../event/event.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EventResponse } from 'src/app/event/event.service';

@Component({
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events$: Observable<EventResponse[]>;

  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.events$ = this.eventService.list();
  }
}
