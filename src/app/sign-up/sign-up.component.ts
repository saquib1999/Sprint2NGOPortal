import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent, merge, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { IDonor } from '../models/donor';
import { HttpDonorService } from '../services/http-donor.service';

@Component({
  //selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  donor!: IDonor;
  constructor(
    private fb: FormBuilder,
    private donorService: HttpDonorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9][0-9]{5,11}'),
        Validators.minLength(6),
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
        userType: new FormControl('', [Validators.required]),
      }),
      address: new FormGroup({
        city: new FormControl(''),
        state: new FormControl(''),
        pin: new FormControl(''),
        landmark: new FormControl(''),
      }),
    });
  }

  save() {
    if (this.signUpForm.valid) {
      this.donorService.registerDonor(this.signUpForm.value).subscribe(
        (result) => console.log(result),
        (err) => console.log('Error')
      );
    }
    this.router.navigate(['/Sign-In']);
  }
  get address() {
    return this.signUpForm.controls.address as FormGroup;
  }
  get userLoginDetails() {
    return this.signUpForm.controls.userLoginDetails as FormGroup;
  }
}
