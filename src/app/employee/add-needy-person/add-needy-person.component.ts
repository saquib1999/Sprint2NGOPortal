import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-add-needy-person',
  templateUrl: './add-needy-person.component.html',
  styleUrls: ['./add-needy-person.component.css'],
})
export class AddNeedyPersonComponent implements OnInit {
  addNeedyPersonForm!: FormGroup;
  validUsername!: boolean;

  constructor(
    private httpEmployeeService: HttpEmployeeService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.addNeedyPersonForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{5,11}'),
        Validators.minLength(6),
      ]),
      familyIncome: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      userLoginDetails: new FormGroup({
        username: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z0-9@#]{3,15}'),
          Validators.minLength(3),
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z0-9@#]{3,15}'),
          Validators.minLength(3),
        ]),
        userType: new FormControl('NEEDYPERSON'),
      }),
      address: this.fb.group({
        city: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        state: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        pin: new FormControl('', [
          Validators.required,
          Validators.pattern('[1-9][0-9]{5}'),
        ]),
        landmark: new FormControl('', [Validators.required]),
      }),
    });
  }

  submitForm() {
    if (this.addNeedyPersonForm.valid) {
      this.httpEmployeeService
        .createNeedyPerson(this.addNeedyPersonForm.value)
        .subscribe(
          (value) => {
            alert('Created');
            this.route.navigate(['employee/all-needy-person']);
          },
          (err) => alert('Username Already Taken')
        );
    }
  }

  get address() {
    return this.addNeedyPersonForm.controls.address as FormGroup;
  }
  get userLoginDetails() {
    return this.addNeedyPersonForm.controls.userLoginDetails as FormGroup;
  }
}
