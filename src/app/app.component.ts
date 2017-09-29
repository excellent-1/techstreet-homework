import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { AngularMessageComponent } from '../angular/message.component';
import { LoginComponent } from './login/login.component';
//import { operator } from 'rxjs/add/operator/filter'; // To get rid of Error: [ts] Property 'filter' does not exist on type 'Observable<any>'.
//import  'rxjs/add/operator/filter';
//C:\____Angular\_Interview-Assignment\techstreet-homework\node_modules\rxjs\add\operator\filter.d.ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
   
})
export class AppComponent {
  title = 'Techstreet Homework';
}

