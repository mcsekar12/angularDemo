import { EventsService } from './../events/events.service';

import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {


 id:number;
 event:any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: EventsService,
    private meta: Meta,
    private title: Title) { }

  private sub: any;
   
    ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
  
         // In a real app: dispatch action to load the details here.
         this.getEvent();
      });
    }
  
    ngOnDestroy() {
      this.sub.unsubscribe();
    }


    getEvent(){
      this.service.getEvent(this.id).subscribe(res=>{
        this.event=res;
        this.meta.updateTag({ name: 'keywords', content: res.name.text });
        this.meta.updateTag({ name: 'description', content: res.description.text });
        this.title.setTitle( res.name.text);
      })

    }

  // ngOnInit() {
  //   this.event$ = this.route.paramMap
  //   .switchMap((params: ParamMap) =>
  //     this.service.getEvent(params.get('id'))
  //   );
  // }


}
