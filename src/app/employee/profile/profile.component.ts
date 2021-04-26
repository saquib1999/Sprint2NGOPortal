import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/models/Employee';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  person!: Employee;
  id!: string | null;
  constructor(private httpemployeeservice: HttpEmployeeService) {}

  ngOnInit(): void {
    this.id = sessionStorage.getItem('id');
    this.httpemployeeservice
      .getProfileDetails(this.id)
      .subscribe((result) => (this.person = result));
  }
}
