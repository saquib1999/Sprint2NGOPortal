import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  loginWindow = false;
  loggedIn = true;
  constructor(private service: AuthServiceService) {}

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
}
