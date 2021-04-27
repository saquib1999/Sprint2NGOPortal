import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpNeedyPersonService } from 'src/app/services/http-needy-person.service';
import { INeedyPeople } from '../NeedyPeople';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileNeedyPersonComponent implements OnInit {
  pageTitle = 'My Profile';
  needyPerson!: INeedyPeople;
  errorMessage = '';
  needyPersonId!: string;

  constructor(
    private router: Router,
    private needyPersonService: HttpNeedyPersonService
  ) {}

  ngOnInit(): void {
    this.getNeedyPerson();
    console.log(this.needyPersonId);
  }

  getNeedyPerson() {
    this.needyPersonService.getNeedyPersonDetails().subscribe({
      next: (needyPerson: INeedyPeople) => (this.needyPerson = needyPerson),
      error: (err) => (this.errorMessage = err),
    });
  }
}
