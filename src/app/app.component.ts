import { Component } from '@angular/core';
import { LoginSevices } from '../services/login.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private services: LoginSevices) { }
  title = ' Welcome to Angular2!';
  public sexs = [{ id: 1, name: "Nam" }, { id: 2, name: "Nữ" }, { id: 3, name: "Khác" }];
  onSubmit(value: any) {
    console.log(value);
  }
  logOut() {
    this.services.setLogin(false);
  }
}