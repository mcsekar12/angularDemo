import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { EventRoutingModule } from './event-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EventRoutingModule
  ],
  declarations: [EventComponent]
})
export class EventModule { }
