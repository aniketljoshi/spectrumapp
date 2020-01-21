import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { EventsRoutingModule } from './events-routing.module';
import { EventComponent } from './page/event/event.component';



@NgModule({
  declarations: [EventComponent],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class EventsModule { }
