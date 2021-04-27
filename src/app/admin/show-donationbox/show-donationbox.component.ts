import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DonationBox } from 'src/app/models/DonationBox';
import { HttpAdminService } from 'src/app/services/http-admin.service';

@Component({
  selector: 'app-show-donationbox',
  templateUrl: './show-donationbox.component.html',
  styleUrls: ['./show-donationbox.component.css'],
})
export class ShowDonationboxComponent implements OnInit {
  donationbox!: DonationBox[];

  constructor(
    private fb: FormBuilder,
    private adminService: HttpAdminService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.view();
  }

  view() {
    this.adminService.showDonationBox().subscribe(
      (donationbox) => {
        this.donationbox = donationbox;
        console.log(donationbox);
      },
      (err) => {
        console.log(err), alert('Error');
      }
    );
  }
}
