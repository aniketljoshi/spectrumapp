import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/models/event.model';
import { AppResources } from 'src/app/core/configs/resource/app-resources';
import { EventsService } from 'src/app/core/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  events: Event[];
  translations = AppResources;

  constructor(private eventsService: EventsService, private router: Router) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents().subscribe((res) => {
      this.events = res;
    });
  }

}
