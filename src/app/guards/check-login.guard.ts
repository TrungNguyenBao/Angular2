import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginSevices } from '../../services/login.services';
@Injectable()
export class CheckLoginGuards implements CanActivate{
    constructor(private services:LoginSevices){}
    canActivate(){
        return this.services.isLogged();
    }
}