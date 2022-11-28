import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  name=""
  designation=""
  Salary=""
  company=""

  readValues=()=>
  {

  let data:any={
    "name":this.name,
    "designation":this.designation,
    "Salary":this.Salary,
    "company":this.company
  }
  console.log(data)


}
}
