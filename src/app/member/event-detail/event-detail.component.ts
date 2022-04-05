import { EventDetailResponse, EventService } from '../../event/event.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EventResponse } from 'src/app/event/event.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event$: Observable<EventDetailResponse>;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const date = this.route.snapshot.paramMap.get('date');
    if (!date) return;
    this.event$ = this.eventService.detail(date);
  }
}
