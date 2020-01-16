import { Event } from '../models/event.model';

export interface IEvent {
    getEvents();
    getEvent(id: string);
    creatEvent(event: Event);
    updateEvent(even: Event);
}
