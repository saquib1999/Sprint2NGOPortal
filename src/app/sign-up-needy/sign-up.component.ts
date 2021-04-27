import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { INeedyPeople } from '../needy-person/NeedyPeople';
import { HttpNeedyPersonService } from '../services/http-needy-person.service';

@Component({
  //selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpNeedyComponent implements OnInit {
  signUpForm!: FormGroup;
  needyPerson!: INeedyPeople;
  constructor(
    private fb: FormBuilder,
    private needypersonService: HttpNeedyPersonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9][0-9]{5,11}'),
        Validators.minLength(6),
      ]),
      familyIncome: new FormControl('', [
        Validators.required,
        // Validators.pattern('[1-9][.{1}0-9]'),
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
        landmark: new FormControl('', [
          Validators.required,
          Validators.pattern('a-zA-Z 0-9/,-'),
        ]),
      }),
    });
  }

  save() {
    if (this.signUpForm.valid) {
      this.needypersonService
        .registerNeedyPerson(this.signUpForm.value)
        .subscribe(
          (result) => console.log(result),
          (err) => console.log('Error'),
          () => this.saveDetails()
        );
    }
  }

  saveDetails() {
    this.signUpForm.reset();
    this.router.navigate(['/Sign-In']);
  }

  get address() {
    return this.signUpForm.controls.address as FormGroup;
  }
  get userLoginDetails() {
    return this.signUpForm.controls.address as FormGroup;
  }
}
