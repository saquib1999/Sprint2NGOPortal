import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/Address';
import { Employee } from 'src/app/models/Employee';
import { HttpAdminService } from 'src/app/services/http-admin.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm !: FormGroup;
  UserForm !: FormGroup;
  employee !: Employee;
  

  constructor(private fb : FormBuilder, private adminService : HttpAdminService, private router : Router) { }

  ngOnInit(): void {
    this.addEmployeeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      userLoginDetails: new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9@#]{8,15}')]),
      }),
      address: new FormGroup({
        city: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
        state: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
        pin: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
        landmark: new FormControl('', [Validators.required]),
      }),
    });
  }

  

  save(){
    if(this.addEmployeeForm.valid){
      if(this.addEmployeeForm.valid){
      this.adminService.createEmployee(this.addEmployeeForm.value).subscribe(
        (employee) => {
          alert("Successfully Added Employee")
          console.log(employee)
        },
        (err) => {alert("Error")
      console.log(err)}
      )
      }
    }
    
    
  }

  get address() {
    return this.addEmployeeForm.controls.address as FormGroup;
  }

  get userLoginDetails() {
    return this.addEmployeeForm.controls.userLoginDetails as FormGroup;
  }
}
