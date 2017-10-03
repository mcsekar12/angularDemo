import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EventComponent } from './event.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'event/:id',component: EventComponent },
    ])],
    exports: [RouterModule]
})
export class EventRoutingModule { }
