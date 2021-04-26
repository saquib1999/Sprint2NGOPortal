import { Component, OnInit } from '@angular/core';
import { DonationDistribution } from 'src/app/models/DonationDistribution';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-distributed-list',
  templateUrl: './distributed-list.component.html',
  styleUrls: ['./distributed-list.component.css'],
})
export class DistributedListComponent implements OnInit {
  disList!: DonationDistribution[];
  disListLength!: number;
  constructor(private httpEmployeeService: HttpEmployeeService) {}

  ngOnInit(): void {
    this.httpEmployeeService.distributedList().subscribe(
      (result) => {
        this.disList = result;
        this.disListLength = result.length;
      },
      (err) => {
        alert('Error');
        console.log(err);
      }
    );
  }
}
