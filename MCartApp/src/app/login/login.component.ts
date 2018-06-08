import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


user: User = {
  username : 'Admin',
  password : 'a'
};
public bool ; issuccess = false;

  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  // tslint:disable-next-line:one-line
  {
    // tslint:disable-next-line:one-line
    if (this.user.username === 'Admin' && this.user.password === 'a')
    // tslint:disable-next-line:one-line
    {
      this.issuccess = true;


    }
  }

}
