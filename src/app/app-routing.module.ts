import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { DonationComponent } from './donor/donation/donation.component';
import { DonorDashboardComponent } from './donor/donor-dashboard/donor-dashboard.component';
import { DashboardComponent } from './employee/dashboard/dashboard.component';
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
