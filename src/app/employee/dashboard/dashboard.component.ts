import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  data!: any;
  constructor(
    private httpEmployeeService: HttpEmployeeService,
    private service: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.httpEmployeeService.getAllNeedyPeople().subscribe(
      (result) => {
        this.data = result;
        console.log(result);
      },
      (err) => {
        console.log(err), alert('Error');
      }
    );

    this.httpEmployeeService.viewRequests().subscribe(
      (result) => {
        this.data = result;
        console.log(result);
      },
      (err) => {
        console.log(err), alert('Error');
      }
    );
  }

  OnClick() {
    this.service.logOut();
  }
}
