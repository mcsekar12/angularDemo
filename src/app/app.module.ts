import { EventsService } from './events/events.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { EventModule } from './event/event.module';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '',   redirectTo: '/events', pathMatch: 'full' },
      { path: 'events', component: EventsComponent}
    ]),
    
    EventModule,
    HttpModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
