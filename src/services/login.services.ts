import { Injectable } from '@angular/core';
@Injectable()
export class LoginSevices {
    public isLogin: boolean;
    isLogged(): boolean {
        return this.isLogin;
    }
    setLogin(isLoggedIn: boolean) {
        this.isLogin = isLoggedIn;
    }
}