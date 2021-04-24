import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  loginProcess() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value).subscribe(
        (result) => {
          this.token = result.token;
          this.loggedIn = true;
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
        },
        (err) => {
          console.log('HTTP Error', err);
          console.log(this.formGroup.value);
        }
      );
    }
  }
  isLoggedIn() {}
}
