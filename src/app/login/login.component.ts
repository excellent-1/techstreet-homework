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
import { LoginVM } from '../models/LoginViewModel'
import { Observable } from 'rxjs/Observable'
import 'rxjs'; // To get rid of error during ng test >> Error: [ts] Property 'filter' does not exist on type 'Observable<any>' /src/app/login/login.component.ts (56,6): Property 'map' does not exist on type 'Observable<any>'..

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit 
{
  ViewModel: LoginVM = LoginVM.fromJson({});
  error: string;
  loginForm: FormGroup;
  loggedIn:  string = null;
  username = new FormControl('', [
    Validators.required
    ]);
  password = new FormControl('', [
    Validators.required
    ]);

  constructor(
    private _angularService: AngularService,
    private _formBuilder: FormBuilder,
    private _loginService: LoginService
  ) {

    // Set up validation with form builder using only values that will display on UI
    this.loginForm = this._formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {
    this.initForm();
    this.loggedIn = localStorage.getItem('currentUser');
    this._angularService.setDirective(1);
  }

  initForm() {
    this.loginForm.valueChanges
    .filter(() => this.loginForm.valid)
    .map( (form: any) => {
      this.ViewModel.username = form.username;
      this.ViewModel.password = form.password;
    })
    .subscribe();
  }

  save() {
    if(this.isUsernameValid() && this.isPasswordValid() ){
      this._angularService.setDirective(2);
      this._loginService.login(this.ViewModel.username, this.ViewModel.password);
    } 
  }

  isUsernameValid(){
    return this.username.value.length > 0;
  }

  isPasswordValid(){
    return this.password.value.length > 0;
  }

  isValid(){ // Needs more work
    return this.loginForm.valid;
  }

}
