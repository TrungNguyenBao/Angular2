import {Routes, RouterModule} from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './notfound.component';
import{HomeComponent}  from './home.component';

 const routing :Routes = [
    {path:'', component:HomeComponent},
    // {path:'',redirectTo:'employees',pathMatch:'full'},
    {path:'employees',component:HeaderComponent},
    {path:'**', component:NotFoundComponent}
]
export const appRoute= RouterModule.forRoot(routing);