import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeViewComponent } from './view-employee/view-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { SignupComponent } from './signup/signup.component';

import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: ListEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'employees/new', component: AddEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'employees/:id', component: EmployeeViewComponent, canActivate: [AuthGuard] },
  { path: 'employees/:id/edit', component: EditEmployeeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
