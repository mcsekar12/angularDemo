import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Meta, Title } from '@angular/platform-browser';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls : ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public message: string;
  public events:[any];
  public loading:boolean;

  constructor(private meta: Meta,private eventsService:EventsService,private title: Title) {
 
  }

  ngOnInit() {
    this.message = 'Hello';
    this.loading=false;
    this.getEvents();
  }

  getEvents(){
    this.loading=true;
    this.eventsService.getEvents().subscribe(res=>{

      this.events=res.events;
      this.meta.updateTag({ name: 'keywords', content: 'All Events List ' });
      this.meta.updateTag({ name: 'description', content: 'Events list from eventsbrite' });
      this.title.setTitle( 'Events Home' );
      this.loading=false;
    })
  }
}