import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OmiComponent } from './omi/omi.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeServices } from '../services/employees.services';
import { appRoute } from './app.route';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { LoginComponent } from './login-component/login-component.component';
import { LoginSevices } from '../services/login.services';
import { CheckLoginGuards } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-login-derective.component';
import { EmployDetailComponent } from './employees/employees-detail.component';
import { EmployeesTabOneComponent } from './employees/employees-tab-one/employees-tab-one.component';
import { EmployeesTabTwoComponent } from './employees/employees-tab-two/employees-tab-two.component';
import { EmployeesEditComponent } from './employees/employees-edit/employees-edit.component';
import { EmployeesAddComponent } from './employees/employees-add/employees-add.component';
@NgModule({
  declarations: [
    AppComponent,
    OmiComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent, 
    EmployDetailComponent,
    LoginComponent,
    EmployeesTabOneComponent,
    EmployeesTabTwoComponent,
    EmployeesTabTwoComponent,
    EmployeesEditComponent,
    EmployeesAddComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoute
  ],
  providers: [EmployeeServices,LoginSevices,CheckLoginGuards,CheckSaveFormGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
