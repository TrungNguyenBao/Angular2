import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../../services/employees.services';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public employees: any[];
  public pages: number[];
  public currentPage: number;
  public subscription: Subscription;
  public _id: number;
  constructor(
    private employeeServices: EmployeeServices,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit() {

    this.activatedRoute.queryParams.subscribe(params => {
      this.currentPage = params['page'] || 1;
      // console.log(this.currentPage);
      // console.log(params['filter']);
    })
    this.loadData();
    this.pages = [1, 2, 3, 4, 5];
  }
  delete(id: number) {
    let confirmResult = confirm("Are you sure to delete?");
    if (confirmResult) {
      this.employeeServices.delete(id).subscribe(response => {
        if (response) {
          alert("Delete success");
          this.loadData()
        }
      })
    }
  }
  loadData() {
    this.employeeServices.getList().subscribe((response: any) => {
      this.employees = response;
    }, error => {
      console.log(error);
    });
  }
}
