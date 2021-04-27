import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { HttpAdminService } from 'src/app/services/http-admin.service';

@Component({
  selector: 'app-modify-employee',
  templateUrl: './modify-employee.component.html',
  styleUrls: ['./modify-employee.component.css']
})
export class ModifyEmployeeComponent implements OnInit {
  modifyEmployeeForm: any;
  employee !: Employee;
  id!:string|null;
  errorMessage!: string;
  constructor(private fb : FormBuilder, private adminService : HttpAdminService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    
    this.modifyEmployeeForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('[0-9]*')]),
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
      address: new FormGroup({
        city: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
        state: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
        pin: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
        landmark: new FormControl('', [Validators.required]),
      }),
    });

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      const id1 = +this.id;
      this.getEmployee(id1);
    }
    
  }

  getEmployee(id: any):void{
    this.adminService.getEmployeeById(this.id).subscribe(
      (employee) => this.displayEmployee(employee),
      (err) => this.errorMessage = err
    )
  }
  displayEmployee(employee : Employee){
    console.log(employee);
    if(this.modifyEmployeeForm){
      this.modifyEmployeeForm.reset();
    }

    this.employee = employee;

    this.modifyEmployeeForm.patchValue({
      id: this.employee.id,
      name: this.employee.name,
      email: this.employee.email,
      phone: this.employee.phone,
      address:{
      city: this.employee.address.city,
      state: this.employee.address.state,
      pin: this.employee.address.pin,
      landmark: this.employee.address.landmark
      }
    });
  }
  save(){
    if(this.modifyEmployeeForm.valid){
      this.adminService.updateEmployee(this.modifyEmployeeForm.value).subscribe(
        (employee) => {
          alert("Successfully Modified Employee")
          console.log(employee)
        },
        (err) => {alert("Error")
      console.log(err)}
      )
    }
    this.router.navigate(['/find-all-employees'])
  }

  get address() {
    return this.modifyEmployeeForm.controls.address as FormGroup;
  }

  get userLoginDetails() {
    return this.modifyEmployeeForm.controls.userLoginDetails as FormGroup;
  }
}
