import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DonationDistribution } from 'src/app/models/DonationDistribution';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-approved-list',
  templateUrl: './approved-list.component.html',
  styleUrls: ['./approved-list.component.css'],
})
export class ApprovedListComponent implements OnInit {
  dd!: DonationDistribution;
  appListLength!: number;
  approvedList!: DonationDistribution[];
  constructor(
    private httpEmployeeService: HttpEmployeeService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.httpEmployeeService.approvedList().subscribe(
      (result) => {
        this.approvedList = result;
        this.appListLength = result.length;
      },
      (err) => {
        alert('Error');
        console.log(err);
      }
    );
  }

  help(id: number) {
    this.dd = this.performFilter(id)[0];
    console.log(this.dd);
    this.httpEmployeeService.helped(this.dd).subscribe(
      (result) => {
        console.log(result);
        this.route.navigate(['employee/donated']);
      },
      (err) => {
        alert('error');
        console.log(err);
      }
    );
  }
  performFilter(listFilter: number) {
    return this.approvedList.filter(
      (req: DonationDistribution) => req.id == listFilter
    );
  }
}
