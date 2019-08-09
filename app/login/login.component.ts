import { Component, OnInit } from '@angular/core';
import { Credentials } from '../credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Credentials = {userName:'', passWord:''}
  status: string;
  constructor() { }

  ngOnInit() {
  }

  validate(){
    if(this.user.userName === 'India' && this.user.passWord === 'India'){
      this.status = 'valid user';
    }else{
      this.status = 'Invalid user';
    }
  }
}
