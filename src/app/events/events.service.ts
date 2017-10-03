
import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class EventsService {

  constructor(private http: Http) { }


  getEvents() {
    const headers = new Headers();
    return this.http.get('https://www.eventbriteapi.com/v3/events/search/?token=WZ3Z4GNJ4Q7R4FZUULIT', { headers: headers })
        .map((data: Response) => {
            console.log(data.json());
            return data.json();
        })
        .catch(this.handleError);
}

getEvent(eventId){
    const headers = new Headers();
    return this.http.get('https://www.eventbriteapi.com/v3/events/'+eventId+'/?token=WZ3Z4GNJ4Q7R4FZUULIT', { headers: headers })
        .map((data: Response) => {
            console.log(data.json());
            return data.json();
        })
        .catch(this.handleError);
}

private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
}
private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
        errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}



}
