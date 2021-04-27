import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminGuardService } from '../services/admin-guard.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ApproveDonationComponent } from './approve-donation/approve-donation.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { FindAllEmployeesComponent } from './find-all-employees/find-all-employees.component';
import { FindAllPendingDonationsComponent } from './find-all-pending-donations/find-all-pending-donations.component';
import { FindEmployeeByIdComponent } from './find-employee-by-id/find-employee-by-id.component';
import { FindEmployeeByNameComponent } from './find-employee-by-name/find-employee-by-name.component';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';
import { ShowDonationboxComponent } from './show-donationbox/show-donationbox.component';


@NgModule({
  declarations: [
    AddEmployeeComponent,
    ApproveDonationComponent,
    DeleteEmployeeComponent,
    EmployeeProfileComponent,
    FindAllEmployeesComponent,
    FindAllPendingDonationsComponent,
    FindEmployeeByIdComponent,
    FindEmployeeByNameComponent,
    ModifyEmployeeComponent,
    ShowDonationboxComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
        {path: 'find-all-pending-donations/approve/:id/:status', component : ApproveDonationComponent, canActivate: [AdminGuardService]},
    {path: 'modify-employee/:id', component : ModifyEmployeeComponent, canActivate: [AdminGuardService]},
  {path: 'add-employee', component : AddEmployeeComponent, canActivate: [AdminGuardService]},
  {path: 'delete-employee/:username', component : DeleteEmployeeComponent, canActivate: [AdminGuardService]},
  {path: 'find-all-employees', component : FindAllEmployeesComponent, canActivate: [AdminGuardService]},
  {path: 'find-employee-by-id', component : FindEmployeeByIdComponent, canActivate: [AdminGuardService]},
  {path: 'find-employee-by-name', component : FindEmployeeByNameComponent, canActivate: [AdminGuardService]},
  {path: 'show-donationbox', component : ShowDonationboxComponent, canActivate: [AdminGuardService]},
  {path: 'find-all-pending-donations', component : FindAllPendingDonationsComponent, canActivate: [AdminGuardService]},
  {path: 'find-all-employees/:id', component : EmployeeProfileComponent, canActivate: [AdminGuardService]}

      ]),

   
  ]
})
export class AdminModule { }