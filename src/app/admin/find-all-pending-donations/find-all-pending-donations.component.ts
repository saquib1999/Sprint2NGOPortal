import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DonationDistribution } from 'src/app/models/DonationDistribution';
import { HttpAdminService } from 'src/app/services/http-admin.service';

@Component({
  selector: 'app-find-all-pending-donations',
  templateUrl: './find-all-pending-donations.component.html',
  styleUrls: ['./find-all-pending-donations.component.css']
})
export class FindAllPendingDonationsComponent implements OnInit {

  donations !: DonationDistribution[];
  errorMessage: any;

  constructor(private fb : FormBuilder, private adminService : HttpAdminService, private router : Router) { }
  
  ngOnInit(): void {
    this.view();
  }

  view(){
    this.adminService.getAllPendingDonations().subscribe({
      next: donations => {
        this.donations = donations;
        console.log(donations);
      },
      error: err  => this.errorMessage = err
    
    })
  }

  

}
