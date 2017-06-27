import {Routes, RouterModule} from '@angular/router';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import{HomeComponent}  from './home.component';

export const routing :Routes = [
    {path:'', component:HomeComponent},
    {path:'employees',component:HeaderComponent}
]
export const appRoute= RouterModule.forRoot(routing);