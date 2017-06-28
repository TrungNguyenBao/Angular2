import {Routes, RouterModule} from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './notfound.component';
import { EmployDetailComponent } from './employees-detail.component';
import { EmployeesTabOneComponent } from './employees-tab-one/employees-tab-one.component';
import { EmployeesTabTwoComponent } from './employees-tab-two/employees-tab-two.component';
import{HomeComponent}  from './home.component';

 const routing :Routes = [
    {path:'', component:HomeComponent},
    // {path:'',redirectTo:'employees',pathMatch:'full'},
    {path:'employees',component:HeaderComponent},
    {path:'employee-detail/:id',component:EmployDetailComponent,
    children:[
        {path:'',redirectTo:"tabone",pathMatch:'full'},
        {path:'tabone',component:EmployeesTabOneComponent},
        {path :'tabtwo',component:EmployeesTabTwoComponent}
    ]    
},
    {path:'**', component:NotFoundComponent}
]
export const appRoute= RouterModule.forRoot(routing);