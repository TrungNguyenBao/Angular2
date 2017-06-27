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

@NgModule({
  declarations: [
    AppComponent,
    OmiComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent
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
