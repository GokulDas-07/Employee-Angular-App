import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeViewComponent } from './employee-view/employee-view.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    EmployeeAddComponent,
    EmployeeSearchComponent,
    EmployeeDeleteComponent,
    EmployeeViewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
