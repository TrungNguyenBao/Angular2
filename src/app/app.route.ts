import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './notfound.component';
import { EmployeesTabOneComponent } from './employees/employees-tab-one/employees-tab-one.component';
import { EmployeesTabTwoComponent } from './employees/employees-tab-two/employees-tab-two.component';
import { LoginComponent } from './login-component/login-component.component';
import { HomeComponent } from './home.component';
import { CheckLoginGuards } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-login-derective.component';
import { EmployeesEditComponent } from './employees/employees-edit/employees-edit.component';
import { EmployDetailComponent } from './employees/employees-detail.component';
import { EmployeesAddComponent } from './employees/employees-add/employees-add.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    // {path:'',redirectTo:'employees',pathMatch:'full'},
    { path: 'employees', component: HeaderComponent},
    { path: 'login', component: LoginComponent },
    {path:'employee-edit/:id',component:EmployeesEditComponent},
     {path:'employee-add',component:EmployeesAddComponent},
    {
        path: 'employee-detail/:id', component: EmployDetailComponent,
        children: [
            { path: '', redirectTo: "tabone", pathMatch: 'full' },
            { path: 'tabone', component: EmployeesTabOneComponent },
            { path: 'tabtwo', component: EmployeesTabTwoComponent }
        ]
    },
    { path: '**', component: NotFoundComponent }
]
export const appRoute = RouterModule.forRoot(routing);