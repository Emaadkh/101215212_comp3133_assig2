import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../share/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(employee: Employee) {
    this.employeeService.addEmployee(employee).subscribe(() => {
      this.router.navigate(['/employees']);
    });
  }
  

  onCancel() {
    this.router.navigate(['/employees']);
  }
}
