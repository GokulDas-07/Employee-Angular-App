import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {
  data:any =[
    {
    "name":"gokul",
    "designation":"Trainee",
    "Salary":1422,
    "company":"Nest"
  },
  {
    "name":"rahul",
    "designation":"Trainee",
    "Salary":456,
    "company":"IBS"
  },
  {
  "name":"rohit",
  "designation":"Trainee",
  "Salary":102,
  "company":"Nest"
  }]
}
