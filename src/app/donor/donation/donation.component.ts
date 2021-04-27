import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IDonation } from 'src/app/models/donation';
import { HttpDonorService } from 'src/app/services/http-donor.service';

@Component({
  // selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
})
export class DonationComponent implements OnInit {
  donationForm!: FormGroup;
  donation!: IDonation;
  errorMessage: string = '';
  sub!: Subscription;
  lreceipt!: IDonation;
  constructor(
    private fb: FormBuilder,
    private donorService: HttpDonorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.sub=this.donorService.getLastReceipt().subscribe({
    //   next: lreceipt => {
    //     this.lreceipt = lreceipt;
    //     console.log(this.lreceipt)

    //   },
    //   error: err  => this.errorMessage = err
    // })

    this.donationForm = new FormGroup({
      nameOnCard: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
      ]),
      cardNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9][0-9]{5,11}'),
        Validators.minLength(12),
        Validators.maxLength(12),
      ]),
      cvvNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9][0-9][0-9]'),
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),
      expiryDate: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9][1-9]/[0-9][1-9]'),
      ]),
      description: new FormControl(''),
      amount: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9][0-9]{1,10}'),
      ]),
      ngo: new FormControl('BUTTERFLIES INDIA'),
      // item: new FormGroup({
      //   item: new FormControl(''),
      //   description: new FormControl(''),
      // }),
    });
  }

  save() {
    if (this.donationForm.valid) {
      this.donorService.makeDonation(this.donationForm.value).subscribe(
        (result) => console.log(result),
        (err) => console.log(err)
      );
    }
    this.router.navigate(['/home']);
  }
}
