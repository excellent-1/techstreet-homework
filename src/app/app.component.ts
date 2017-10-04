import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Pipe, PipeTransform } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Piped } from '../angular/pipe';
import { InitModule } from '../angular/init'; // (Contains: AngularMessageComponent)


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //template: ' <h1>  {{title}} </h1>  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css"   integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ"   crossorigin="anonymous"  >  <p> This is your guided homework assignment. Solve the problem presented  in each step in order to reveal the next problem and so on.  You MUST do a git commit each time a problem is solved so that your incremental work can be reviewed. </p>   <ng-msg-comp #component> {{ component.directive | piped }} </ng-msg-comp>  <br/>  <app-login> </app-login> <ng-content></ng-content> '
})
export class AppComponent {
  title = 'Techstreet Homework';

  //piped:  Piped = null;

  constructor(

  ) {

    //this.piped = new Piped();

  }


}

