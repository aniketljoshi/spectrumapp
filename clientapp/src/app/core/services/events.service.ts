import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IEvent } from 'src/app/shared/interface/ievent';
import { Event } from 'src/app/shared/models/event.model';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventsService implements IEvent {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(environment.baseUrl + '/json/get/Vk7OTypQ8');
  }
  
  getEvent(id: string): Observable<Event>  {
    return this.http.get<Event>(environment.baseUrl + '/json/get/Vk7OTypQ8/' + id);
  }

  creatEvent(event: Event) {
    throw new Error("Method not implemented.");
  }

  updateEvent(even: Event) {
    throw new Error("Method not implemented.");
  }
}
