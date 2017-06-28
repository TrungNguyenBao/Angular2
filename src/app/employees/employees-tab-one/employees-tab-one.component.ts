import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees-tab-one',
  templateUrl: './employees-tab-one.component.html',
  styleUrls: ['./employees-tab-one.component.css']
})
export class EmployeesTabOneComponent implements OnInit, OnDestroy {
  public parentId: number;
  public sub: Subscription;
  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }
  
  ngOnInit() {
    this.sub = this.activatedRouter.parent.params.subscribe(params => {
      this.parentId = params['id'];
      console.log(this.parentId);
    })
  }
  ngOnDestroy() {

  }

}
