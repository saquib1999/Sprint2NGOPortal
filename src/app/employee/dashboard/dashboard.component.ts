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
  disListLength!: number;
  appListLength!: number;
  penListLength!: number;
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

    this.httpEmployeeService.approvedList().subscribe(
      (result) => {
        console.log(result);
        this.appListLength = result.length;
      },
      (err) => {
        alert('Error');
        console.log(err);
      }
    );

    this.httpEmployeeService.pendingList().subscribe(
      (result) => {
        console.log(result);
        this.penListLength = result.length;
      },
      (err) => {
        alert('Error');
        console.log(err);
      }
    );

    this.httpEmployeeService.distributedList().subscribe((result) => {
      this.disListLength = result.length;
    });
  }

  OnClick() {
    this.service.logOut();
  }
}
