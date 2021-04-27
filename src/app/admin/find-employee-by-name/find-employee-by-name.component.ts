import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { HttpAdminService } from 'src/app/services/http-admin.service';

@Component({
  selector: 'app-find-employee-by-name',
  templateUrl: './find-employee-by-name.component.html',
  styleUrls: ['./find-employee-by-name.component.css']
})
export class FindEmployeeByNameComponent implements OnInit {

  findEmployeeByNameForm !: FormGroup;
  employee !: Employee;
  employees !: Employee[];
  errorMessage: any;
  
  constructor(private fb : FormBuilder, private adminService : HttpAdminService, private router : Router) { }

  ngOnInit(): void {
    this.findEmployeeByNameForm = new FormGroup({
      name: new FormControl('', [Validators.required])
    })
  }

  find(){
    if(this.findEmployeeByNameForm.valid){
      this.adminService.getEmployeesByName(this.findEmployeeByNameForm.get('name')?.value).subscribe({
        next: employees => {
          this.employees = employees;
          console.log(employees);
        },
        error: err  => this.errorMessage = err
      
      })
    }
  }

}
