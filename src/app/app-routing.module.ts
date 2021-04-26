import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DonationComponent } from './donor/donation/donation.component';
import { DonorDashboardComponent } from './donor/donor-dashboard/donor-dashboard.component';
import { AddNeedyPersonComponent } from './employee/add-needy-person/add-needy-person.component';
import { AllNeedyPersonComponent } from './employee/all-needy-person/all-needy-person.component';
import { ApprovedListComponent } from './employee/approved-list/approved-list.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';
import { DistributedListComponent } from './employee/distributed-list/distributed-list.component';
import { DonationRequestComponent } from './employee/donation-request/donation-request.component';
import { NeedyPersonComponent } from './employee/needy-person/needy-person.component';
import { PendingListComponent } from './employee/pending-list/pending-list.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NeedyPersonDashboardComponent } from './needy-person/needy-person-dashboard/needy-person-dashboard.component';
import { AdminGuardService } from './services/admin-guard.service';
import { DonorGuardService } from './services/donor-guard.service';
import { EmployeeGuardService } from './services/employee-guard.service';
import { NeedyPersonGuardService } from './services/needy-person-guard.service';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Sign-In', component: SignInComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Sign-Up', component: SignUpComponent },
  {
    path: 'employee',
    component: DashboardComponent,
    canActivate: [EmployeeGuardService],
  },
  {
    path: 'employee/addneedy',
    component: AddNeedyPersonComponent,
    canActivate: [EmployeeGuardService],
  },

  {
    path: 'employee/all-needy-person',
    component: AllNeedyPersonComponent,
    canActivate: [EmployeeGuardService],
  },
  {
    path: 'employee/all-needy-person/:id',
    component: NeedyPersonComponent,
    canActivate: [EmployeeGuardService],
  },

  {
    path: 'employee/pending',
    component: PendingListComponent,
    canActivate: [EmployeeGuardService],
  },
  {
    path: 'employee/approved',
    component: ApprovedListComponent,
    canActivate: [EmployeeGuardService],
  },
  {
    path: 'employee/donated',
    component: DistributedListComponent,
    canActivate: [EmployeeGuardService],
  },
  {
    path: 'employee/donation-requests',
    component: DonationRequestComponent,
    canActivate: [EmployeeGuardService],
  },
  {
    path: 'employee/profile',
    component: ProfileComponent,
    canActivate: [EmployeeGuardService],
  },
  {
    path: 'donor',
    component: DonationComponent,
    canActivate: [DonorGuardService],
  },
  {
    path: 'needy-person',
    component: NeedyPersonDashboardComponent,
    canActivate: [NeedyPersonGuardService],
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuardService],
  },
  {
    path: 'Donate-Now',
    component: DonationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
