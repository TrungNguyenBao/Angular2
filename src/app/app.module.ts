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
import { EmployDetailComponent } from './employees-detail.component';
import { EmployeesTabOneComponent } from './employees-tab-one/employees-tab-one.component';
import { EmployeesTabTwoComponent } from './employees-tab-two/employees-tab-two.component';

@NgModule({
  declarations: [
    AppComponent,
    OmiComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    EmployDetailComponent,
    EmployeesTabOneComponent,
    EmployeesTabTwoComponent,
    EmployeesTabOneComponent,
    EmployeesTabTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    appRoute
  ],
  providers: [EmployeeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
