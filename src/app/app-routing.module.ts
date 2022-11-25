import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';

const routes: Routes = [
  {path:"",component:AdminLoginComponent},
  {path:"add",component:EmployeeAddComponent},
  {path:"search",component:EmployeeSearchComponent},
  {path:"delete",component:EmployeeDeleteComponent},
  {path:"view",component:EmployeeViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
