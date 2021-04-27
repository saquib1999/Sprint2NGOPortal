import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IDonor } from 'src/app/models/donor';
import { HttpDonorService } from 'src/app/services/http-donor.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private donorService: HttpDonorService) {}
  errorMessage: string = '';
  sub!: Subscription;
  donor!: IDonor;
  ngOnInit(): void {
    this.sub = this.donorService.getDonorDetails().subscribe({
      next: (donor) => {
        this.donor = donor;
        console.log(this.donor);
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
