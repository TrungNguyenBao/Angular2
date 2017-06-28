import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector:'app-home',
    template:`
    <h1>This is HomeComponent</h1>
    <button (click)="goHome()">Go Home</button>
    `
})
export class HomeComponent{
constructor(private router:Router){

}
goHome(){
    this.router.navigate(['employees']);
}
} 