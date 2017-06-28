import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EmployDetailComponent } from '../employees-detail.component';
@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<EmployDetailComponent> {
    canDeactivate(component:EmployDetailComponent){
        alert("You can't leave this page without saving data");
        return true;
    }
}