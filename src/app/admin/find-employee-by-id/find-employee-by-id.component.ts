import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { HttpAdminService } from 'src/app/services/http-admin.service';

@Component({
  selector: 'app-find-employee-by-id',
  templateUrl: './find-employee-by-id.component.html',
  styleUrls: ['./find-employee-by-id.component.css']
})
export class FindEmployeeByIdComponent implements OnInit {

  findEmployeeByIdForm !: FormGroup;
  employee !: Employee;
  constructor(private fb : FormBuilder, private adminService : HttpAdminService, private router : Router) { }


  ngOnInit(): void {
    this.findEmployeeByIdForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')])
    })
  }

  find(){
    if(this.findEmployeeByIdForm.valid){
      this.adminService.getEmployeeById(this.findEmployeeByIdForm.get('id')?.value).subscribe(
        (employee) => {
          alert("Employee Found")
          this.employee = employee;
          console.log(employee)
        },
        (err) => {alert("Error")
      console.log(err)}
      )
    }
  }

}
