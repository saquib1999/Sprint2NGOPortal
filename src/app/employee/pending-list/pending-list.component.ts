import { Component, OnInit } from '@angular/core';
import { DonationDistribution } from 'src/app/models/DonationDistribution';
import { Request } from 'src/app/models/Request';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-pending-list',
  templateUrl: './pending-list.component.html',
  styleUrls: ['./pending-list.component.css'],
})
export class PendingListComponent implements OnInit {
  appListLength!: number;
  approvedList!: DonationDistribution[];
  constructor(private httpEmployeeService: HttpEmployeeService) {}

  ngOnInit(): void {
    this.httpEmployeeService.pendingList().subscribe(
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
}
