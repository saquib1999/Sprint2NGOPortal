import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AllReceiptComponent } from './all-receipt/all-receipt.component';
import { DonationCertificateComponent } from './donation-certificate/donation-certificate.component';
import { DonationComponent } from './donation/donation.component';
import { DonorDashboardComponent } from './donor-dashboard/donor-dashboard.component';
import { PaymentReceiptComponent } from './payment-receipt/payment-receipt.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    // DonationComponent,
    DonationCertificateComponent,
    PaymentReceiptComponent,
    AllReceiptComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
        { path: 'Donate-Now', component: DonationComponent },
        { path: 'Donate-Certificate', component: DonationCertificateComponent },
        { path: 'Last-Receipt', component: PaymentReceiptComponent },
        { path: 'All-Receipt', component: AllReceiptComponent },
         {path:'Profile',component:ProfileComponent}
      ]),

   
  ]
})
export class DonorModule { }
