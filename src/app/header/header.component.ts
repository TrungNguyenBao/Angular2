import { Component, OnInit } from '@angular/core';
import { EmployeeServices } from '../../services/employees.services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public employees: any[];
  constructor(private employeeServices: EmployeeServices) {
  }
  ngOnInit() {
    this.employeeServices.getList().subscribe((response: any) => {
      this.employees = response;
    },error=>{
      console.log(error);
  });
  }
}
