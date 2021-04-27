import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { SignInComponent } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginWindow = false;
  loggedIn = true;
  constructor(private service: AuthServiceService, private router: Router) {}

  ngOnInit(): void {}
  toggle() {
    this.loginWindow != this.loginWindow;
    console.log(this.loginWindow);
  }
  loggedInProfile() {
    return this.service.isUserLoggedIn();
  }
  signOut() {
    this.service.logOut();
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
        this.router.navigate(['/needy-person']);
        break;
      case '3':
        this.router.navigate(['/admin']);
        break;
      default:
    }
  }

  profileVisible() {
    if (sessionStorage.getItem('userType') == '0') return true;
    return false;
  }
  routeProfile() {
    switch (sessionStorage.getItem('userType')) {
      case '0':
        this.router.navigate(['/employee/profile']);
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
}
