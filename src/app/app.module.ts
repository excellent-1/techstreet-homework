import { BrowserModule } from '@angular/platform-browser';
import { InitModule } from '../angular/init';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LoginModule } from './login/login.module'; // 2017-26-09 
import { LoginService } from './login.service';
//import { AppRoutingModule } from './app-routing/app-routing.module';
/* Fellow Developers please remember the following:  
1) declarations array is for your Components, Pipes, Directives
2) imports array is for importing modules such as BrowserModule, FormsModule, HttpModule*/
@NgModule({
  declarations: [ AppComponent
    ],
  imports: [ BrowserModule, InitModule, FormsModule, ReactiveFormsModule, HttpModule, LoginModule
    // ,AppRoutingModule
  ],
  providers: [ UserService, LoginService
  ],
  bootstrap: [ AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
