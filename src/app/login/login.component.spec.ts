import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { Component, 
  OnInit
} from '@angular/core';
import { AngularService } from '../../angular/service';
import { 
  FormBuilder, 
  FormGroup,
  FormControl,
  Validators
 } from '@angular/forms';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs/Observable'
import 'rxjs'; // To get rid of error during ng test >> Error: [ts] Property 'filter' does not exist on type 'Observable<any>' /src/app/login/login.component.ts (56,6): Property 'map' does not exist on type 'Observable<any>'..
import { Pipe, PipeTransform } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LoginModule } from './login.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
      declarations: [/*AngularMessageComponent,*/ LoginComponent ],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, LoginModule /*, RouterTestingModule*/],
      providers: [ LoginService, AngularService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
