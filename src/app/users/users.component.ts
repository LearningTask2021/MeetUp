import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  username:String="";

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.username=this.employeeService.getLoggedInUserName();
  }

}
