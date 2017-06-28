import { Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './notfound.component';
import { EmployDetailComponent } from './employees-detail.component';
import { EmployeesTabOneComponent } from './employees-tab-one/employees-tab-one.component';
import { EmployeesTabTwoComponent } from './employees-tab-two/employees-tab-two.component';
import { LoginComponent } from './login-component/login-component.component';
import { HomeComponent } from './home.component';
import { CheckLoginGuards } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-login-derective.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    // {path:'',redirectTo:'employees',pathMatch:'full'},
    { path: 'employees', component: HeaderComponent,canActivate:[CheckLoginGuards]},
    { path: 'login', component: LoginComponent },

    {
        path: 'employee-detail/:id', component: EmployDetailComponent,canDeactivate:[CheckSaveFormGuard],

        children: [
            { path: '', redirectTo: "tabone", pathMatch: 'full' },
            { path: 'tabone', component: EmployeesTabOneComponent },
            { path: 'tabtwo', component: EmployeesTabTwoComponent }
        ]
    },
    { path: '**', component: NotFoundComponent }
]
export const appRoute = RouterModule.forRoot(routing);