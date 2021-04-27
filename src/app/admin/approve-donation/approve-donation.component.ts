import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DonationDistribution } from 'src/app/models/DonationDistribution';
import { HttpAdminService } from 'src/app/services/http-admin.service';

@Component({
  selector: 'app-approve-donation',
  templateUrl: './approve-donation.component.html',
  styleUrls: ['./approve-donation.component.css']
})
export class ApproveDonationComponent implements OnInit {
  dd!:DonationDistribution;
  status!:string | null;
  id!:string | null;

  constructor(private fb : FormBuilder, private adminService : HttpAdminService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.status = this.route.snapshot.paramMap.get('status');
    this.adminService.findDonationById(this.id).subscribe(
      (dd) => {
        this.dd = dd;
        if(this.status == "APPROVED")
      this.dd.status = "APPROVED";
      else if(this.status == "REJECTED")
      this.dd.status = "REJECTED";
      this.dd.ngo = 'BUTTERFLIES INDIA';
      console.log(this.dd);
      },
      (err) => {alert("Error 1")
    console.log(err)}
    )
  }

  setStatus(){
    console.log(this.dd);
    this.adminService.approveDonation(this.dd).subscribe(
      (donation) => {
        if(this.dd.status == "APPROVED")
          alert("Successfully Approved Donation")
        else
          alert("Successfully Rejected Donation")
        console.log(donation)
      },
      (err) => {alert("Error 2")
    console.log(err)}
    )

    this.router.navigate(['admin'])
  }

  cancel(){
    this.router.navigate(['/find-all-pending-donations']);
  }
}
