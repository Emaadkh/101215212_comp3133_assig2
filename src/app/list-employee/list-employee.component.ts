import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeeService } from '../share/employee.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'actions'];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((employees) => {
      this.employees = employees;
    });
  }

  deleteEmployee(id: string): void {
    if (confirm('Are you sure you want to deletethis employee?')) {
      this.employeeService.deleteEmployee(id).subscribe(
        () => {
          // Remove the deleted employee from the list
          this.employees = this.employees.filter((employee) => employee.id !== id);
        },
        (error) => {
          console.error('Error deleting employee:', error);
        }
      );
    }
  }
}

