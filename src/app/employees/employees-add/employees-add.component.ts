import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeServices } from '../../../services/employees.services';

@Component({
  selector: 'app-employees-add',
  templateUrl: './employees-add.component.html',
  styleUrls: ['./employees-add.component.css']
})
export class EmployeesAddComponent implements OnInit {

   public _id: number;
    public subscription: Subscription;
    public emp: any;
    constructor(private router: Router, private activateRoute: ActivatedRoute, private services: EmployeeServices) {
    }
    ngOnInit() {
      this.emp={};
        // this.subscription = this.activateRoute.params.subscribe(params => {
        //     this._id = params['id'];
        // });
        // this.services.getSingle(this._id).subscribe(data => {
        //     this.emp = data;
        // });
    }
      goHome() {
        this.router.navigate(['employees']);
    }
    add(){
      this.services.add(this.emp).subscribe(response=>{
        if(response)
        {
          alert("Save Success");
          this.router.navigate(['employees']);
        }
      });
    }
    // update(){
    //   this.services.update(this._id,this.emp).subscribe(response=>{
    //     if(response)
    //     {
    //       alert("Save Success");
    //       this.router.navigate(['employees']);
    //     }
        
    //   });
    // } 
    // ngOnDestroy() {
    //     this.subscription.unsubscribe();
    // }
}
