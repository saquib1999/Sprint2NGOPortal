import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NeedyPerson } from 'src/app/models/NeedyPerson';
import { Request } from 'src/app/models/Request';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-donation-request',
  templateUrl: './donation-request.component.html',
  styleUrls: ['./donation-request.component.css'],
})
export class DonationRequestComponent implements OnInit {
  request!: Request;
  totalRequests!: number;
  requests!: Request[];
  needyPeople!: NeedyPerson[];
  constructor(
    private route: Router,
    private httpemployeeservice: HttpEmployeeService
  ) {}

  ngOnInit(): void {
    this.httpemployeeservice.viewRequests().subscribe((result) => {
      this.requests = result;
      this.totalRequests = result.length;
    });

    this.httpemployeeservice.getAllNeedyPeople().subscribe((result) => {
      this.needyPeople = result;
    });
  }

  approve(requestId: number) {
    this.request = this.performFilter(requestId)[0];
    this.request.status = 'APPROVED_BY_EMPLOYEE';
    console.log(this.request);
    this.httpemployeeservice
      .approveRequest(this.request)
      .subscribe((result) => {
        console.log(result);
        window.location.reload();
      });
  }

  reject(requestId: number) {
    this.request = this.performFilter(requestId)[0];
    this.request.status = 'REJECTED_BY_EMPLOYEE';
    console.log(this.request);
    this.httpemployeeservice
      .approveRequest(this.request)
      .subscribe((result) => {
        console.log(result);
        this.route.navigate(['employee/donation-requests']);
      });
  }

  performFilter(listFilter: number) {
    return this.requests.filter((req: Request) => req.id == listFilter);
  }
}
