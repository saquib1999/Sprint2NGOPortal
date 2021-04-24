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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
