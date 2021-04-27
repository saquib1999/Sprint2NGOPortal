import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { HttpAdminService } from 'src/app/services/http-admin.service';

@Component({
  selector: 'app-find-all-employees',
  templateUrl: './find-all-employees.component.html',
  styleUrls: ['./find-all-employees.component.css']
})
export class FindAllEmployeesComponent implements OnInit {

  employee !: Employee;
  employees !: Employee[];
  errorMessage: any;
  
  constructor(private fb : FormBuilder, private adminService : HttpAdminService, private router : Router) { }
  
  ngOnInit(): void {
    this.view();
  }

  view(){
    this.adminService.getAllEmployee().subscribe({
      next: employees => {
        this.employees = employees;
        console.log(employees);
      },
      error: err  => this.errorMessage = err
    
    })
  }

  editEmployee(employee : Employee){
    let route = '/modify-employee';
    this.router.navigate([route])
  }
  deleteEmployee(employee : Employee){
    let route = '/delete-employee';
    this.router.navigate([route])
  }

  addEmployee(){
    let route = '/add-employee';
    this.router.navigate([route])
  }
  
  findEmployeeById(){
    let route = '/find-employee-by-id';
    this.router.navigate([route])
  }

  findEmployeeByName(){
    let route = '/find-employee-by-name';
    this.router.navigate([route])
  }
}
