import {Component} from 'angular2/core';
import {Http, Response} from 'angular2/http';


@Component({
  selector: 'simple-http',
  template:`
  <h2>Basic Request</h2>
  <button type="button" (click)="makeRequest()">Make Request</button>
  <div *ngIf="loading">loading...</div>
  <pre>{{data | json}}</pre>
  `
})
export class SimpleHTTPComponent {

}