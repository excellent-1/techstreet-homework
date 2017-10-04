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
import { Piped } from '../angular/pipe';
import { InitModule } from '../angular/init';

// import { AppRoutingModule } from './app-routing/app-routing.module';

/* Remember the following:  
1) declarations array is for your Components, Pipes, Directives
2) imports array is for importing modules such as BrowserModule, FormsModule, HttpModule*/
@NgModule({
  declarations: [ AppComponent, LoginComponent
    ],
  imports: [ BrowserModule, InitModule, FormsModule, ReactiveFormsModule, HttpModule, LoginModule,
      InitModule
  ],
  providers: [ UserService, LoginService, 
  ],
  bootstrap: [ AppComponent],
  schemas: [
    //NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
