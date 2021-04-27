import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';
import { AddNeedyPersonComponent } from './employee/add-needy-person/add-needy-person.component';
import { DonorDashboardComponent } from './donor/donor-dashboard/donor-dashboard.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { NeedyPersonDashboardComponent } from './needy-person/needy-person-dashboard/needy-person-dashboard.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DonationComponent } from './donor/donation/donation.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllNeedyPersonComponent } from './employee/all-needy-person/all-needy-person.component';
import { DonationRequestComponent } from './employee/donation-request/donation-request.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { NeedyPersonComponent } from './employee/needy-person/needy-person.component';
import { DistributedListComponent } from './employee/distributed-list/distributed-list.component';
import { PendingListComponent } from './employee/pending-list/pending-list.component';
import { ApprovedListComponent } from './employee/approved-list/approved-list.component';
import { ChangePasswordComponent } from './employee/change-password/change-password.component';
import { EditProfileComponent } from './employee/edit-profile/edit-profile.component';
import { DonorModule } from './donor/donor.module';
import { NeedyPersonModule } from './needy-person/needyPerson.module';
import { SignUpNeedyComponent } from './sign-up-needy/sign-up.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetpwdComponent,
    DashboardComponent,
    AddNeedyPersonComponent,
    DonorDashboardComponent,
    AdminDashboardComponent,
    NeedyPersonDashboardComponent,
    HomeComponent,
    SignInComponent,
    DonationComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    AllNeedyPersonComponent,
    DonationRequestComponent,
    ProfileComponent,
    NeedyPersonComponent,
    DistributedListComponent,
    PendingListComponent,
    ApprovedListComponent,
    ChangePasswordComponent,
    EditProfileComponent,
    SignUpNeedyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DonorModule,
    NeedyPersonModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
