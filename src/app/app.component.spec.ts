import { inject, TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { Piped } from '../angular/pipe';
import { InitModule } from '../angular/init';
//------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LoginModule } from './login/login.module';
import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';
import 'rxjs/add/operator/filter'; // To get rid of Error: [ts] Property 'filter' does not exist on type 'Observable<any>'.
import { Pipe, PipeTransform } from '@angular/core';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";

let piped: Piped;

describe('AppComponent', () => {  
  let component: AppComponent; 
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
      declarations: [AppComponent, LoginComponent],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, LoginModule, RouterTestingModule,
          InitModule
      ],
      providers: [ UserService, LoginService  ]
    }).compileComponents();
  }));

  beforeEach(() => {
    piped = new Piped();
    fixture = TestBed.createComponent(AppComponent); 
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent); 
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Techstreet Homework'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Techstreet Homework');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Techstreet Homework');
  }));

  it('providing a null param will return a value containing a null ', () => {
    expect(piped.transform(null))
    .toContain(null);
  })

});

/* Nathaniel Hibbler's Testing Notes to the rest of the Team

cd /c/___*Angular/_Interview-Assignment/techstreet-homework
ng test --browsers ChromeDebug

https://codecraft.tv/courses/ng/unit-testing/classes-and-pipes/

https://github.com/Microsoft/vscode-recipes/tree/master/Angular-CLI

1) Add the following to karma.conf.js
 , customLaunchers: {
      ChromeDebug: {
        base: 'Chrome',
        flags: [ '--remote-debugging-port=9333' ]
      }
    }

2) In the console run   "npm run test"

3) A new folder and file will appear in your project named ".vscode/launch.json"

4) Add the following code to ".vscode/launch.json"
    {
      "name": "ng serve",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:4200/#",
      "webRoot": "${workspaceRoot}"
    },
    {
      "name": "ng test",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:9876/debug.html",
      "webRoot": "${workspaceRoot}"
    },
    {
      "name": "ng e2e",
      "type": "node",
      "request": "launch",
      "program": "${workspaceRoot}/node_modules/protractor/bin/protractor",
      "protocol": "inspector",
      "args": ["${workspaceRoot}/protractor.conf.js"]
    }  

  5) Click VIEW > Debug View
  6) In Left hand top corner next to the GREEN Play Button, Click the Dropdown and select the "ng test" configuration
  7) Press play


https://stackoverflow.com/questions/43598192/unit-testing-errors-for-ngmodel-custom-pipe-and-modal

in your test, inside beforeEach block. You need to add the following to TestBed.configureTestingModule

All used pipes, components and directives have to be declared. in your case: SortOnLikePipe and EditMessageModalComponent
all used modules have to be imported. in your case: FormsModule
all needed services have to be provided
Here are the ones you are missing: I'd imagine you might be missing more..

TestBed.configureTestingModule({
      declarations: [ DashboardComponent, SortOnLikePipe, EditMessageModalComponent  ],
      imports:[FormsModule]
      providers: [
        { provide: AF, useClass: MockAF },
        { provide: Router, useValue: routerStub },
      ],
    })


https://stackoverflow.com/questions/39007130/the-pipe-could-not-be-found-angular2-custom-pipe

  If the component which is using the pipe, doesn't belong to the module which has declared the pipe component "globally" then the pipe is not found and you get this error message.
In my case I've declared the pipe in a separate module and imported this pipe module in any other module having components using the pipe.
I have declared a that the component in which you are using the pipe is
the Pipe Module

 import { NgModule }      from '@angular/core';
 import { myDateFormat }          from '../directives/myDateFormat';

 @NgModule({
     imports:        [],
     declarations:   [myDateFormat],
     exports:        [myDateFormat],
 })

 export class PipeModule {

   static forRoot() {
      return {
          ngModule: PipeModule,
          providers: [],
      };
   }
 } 
Usage in another module (e.g. app.module)

  // Import APPLICATION MODULES
  ...
  import { PipeModule }    from './tools/PipeModule';

  @NgModule({
     imports: [
    ...
    , PipeModule.forRoot()
    ....
  ],  
*/