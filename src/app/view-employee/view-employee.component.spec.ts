import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../share/employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employee: Employee | null = null;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployee(id).subscribe((employee: Employee) => {
        this.employee = employee;
      });
    }
  }
}
