import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The  Basic Reactive Form';
  loginform = new FormGroup({
    email: new FormControl('', Validators.required),
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    passwordConfirmation: new FormControl <number>(1, Validators.required),
  })

  get email(){
    return this.loginform.get('email')
  }

  get user(){
    return this.loginform.get('user')
  }

  get password(){
    return this.loginform.get('password')
  }

  get passwordConfirmation(){
    return this.loginform.get('passwordConfirmation')
  }

  loginuser(){}
}
