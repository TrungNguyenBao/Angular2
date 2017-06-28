import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../../services/employees.services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public employees: any[];
  public pages: number[];
  public currentPage:number;
  constructor(
    private employeeServices: EmployeeServices,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) {
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params=>{
      this.currentPage= params['page'] || 1;
      console.log(this.currentPage);
           console.log(params['filter']);
    })
    this.employeeServices.getList().subscribe((response: any) => {
      this.employees = response;
    }, error => {
      console.log(error);
    });
    this.pages = [1, 2, 3, 4, 5];
  }
}
