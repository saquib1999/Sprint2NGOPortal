import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { HttpAdminService } from 'src/app/services/http-admin.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  deleteEmployeeForm !: FormGroup;
  employee !: Employee;
  username !: string|null;
  

  constructor(private fb : FormBuilder, private adminService : HttpAdminService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.deleteEmployeeForm = new FormGroup({
      username: new FormControl(this.username, [Validators.required])
    })
  }

  delete(){
    
    if(this.deleteEmployeeForm.valid){
      this.adminService.deleteEmployee(this.deleteEmployeeForm.get('username')?.value).subscribe(
        (employee) => {
          alert("Successfully Deleted Employee")
          console.log(employee)
        },
        (err) => {alert("Error")
      console.log(err)}
      )

      
    }
    this.router.navigate(['admin'])
    
  }
}
