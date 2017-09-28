import { Component, 
  OnInit,
  ViewChild 
} from '@angular/core';
import { AngularService } from '../../angular/service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //template: '<h2>Login</h2> <form class="col-md-8">   <input placeholder="Login" />  <input placeholder="Password" type="password" />   <button type="Submit">Submit</button>  </form>'
  //template: '<login-component> </login-component>'
  //, styleUrls: ['./login.component.css']
  //, directives: [LoginComponent]
})

export class LoginComponent implements OnInit 
{
  @ViewChild('loginComponent') public loginComponent;
  loginForm: FormGroup;
  loggedIn:  string = null;

  constructor(
    private _service: AngularService,
    private _builder: FormBuilder,
    private _loginService: LoginService
  ) {
    this.loginForm = this._builder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('currentUser');
    this._service.setDirective(1);
  }
  save() {
    debugger;
    this._service.setDirective(2);
    this._loginService.login('', '');
  }
}

