import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  formGroup!: FormGroup;
  username!: Validators;
  private loggedIn = false;
  token = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z0-9]*')],
      ],
      password: ['', [Validators.required]],
    });
  }

  loginProcess() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(
        (result) => {
          this.token = result.token;
          this.loggedIn = true;
          this.routeDashboard();
        },
        (err) => {
          console.log('HTTP Error', err);
          console.log(this.formGroup.value);
        }
      );
    }
  }

  routeDashboard() {
    switch (sessionStorage.getItem('userType')) {
      case '0':
        this.router.navigate(['/employee']);
        break;
      case '1':
        this.router.navigate(['/Donate-Now']);
        break;
      case '2':
        this.router.navigate(['/Need-Help']);
        break;
      case '3':
        this.router.navigate(['/admin']);
        break;
      default:
    }
  }
  isLoggedIn() {}
}
