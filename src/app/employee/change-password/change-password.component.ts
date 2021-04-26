import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  formGroup!: FormGroup;
  private loggedIn = false;
  token = '';

  constructor(
    private router: Router,
    private authService: AuthServiceService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl(sessionStorage.getItem('username'), [
        Validators.required,
      ]),
      password: new FormControl('', [Validators.required]),
      newpassword: new FormControl('', [Validators.required]),
      newpassword2: new FormControl('', [Validators.required]),
    });
  }

  changePasswordProcess() {
    if (this.formGroup.valid) {
    }
  }

  routeDashboard() {
    switch (sessionStorage.getItem('userType')) {
      case '0':
        this.router.navigate(['/employee']);
        break;
      case '1':
        this.router.navigate(['/donor']);
        break;
      case '2':
        this.router.navigate(['/needy-person']);
        break;
      case '3':
        this.router.navigate(['/admin']);
        break;
      default:
    }
  }
  isLoggedIn() {}
}
