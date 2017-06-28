import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSevices } from '../../services/login.services';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private services:LoginSevices) { }

  ngOnInit() {
  }
  checkLogin(value: any) {
    console.log(value);
    if(value.username =="admin" && value.password =="123"){
          this.services.setLogin(true);
          this.router.navigate(['/']);
    }
  }
}
