import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';

const routes: Routes = [
  {path:"",component:AdminLoginComponent},
  {path:"add",component:EmployeeAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
