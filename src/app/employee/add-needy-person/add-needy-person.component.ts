import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-add-needy-person',
  templateUrl: './add-needy-person.component.html',
  styleUrls: ['./add-needy-person.component.css'],
})
export class AddNeedyPersonComponent implements OnInit {
  addNeedyPersonForm!: FormGroup;

  constructor(
    private httpEmployeeService: HttpEmployeeService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.addNeedyPersonForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      familyIncome: new FormControl('', [Validators.required]),
      userLoginDetails: new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
        userType: new FormControl('NEEDYPERSON'),
      }),
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        pin: new FormControl('', [Validators.required]),
        landmark: new FormControl('', [Validators.required]),
      }),
    });
  }

  submitForm() {
    if (this.addNeedyPersonForm.valid) {
      this.httpEmployeeService
        .createNeedyPerson(this.addNeedyPersonForm.value)
        .subscribe((value) => {
          alert('Created');
          this.route.navigate(['employee/all-needy-person']);
        });
    }
  }
}
