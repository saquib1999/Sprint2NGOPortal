import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NeedyPersonGuardService } from '../services/needy-person-guard.service';
import { ModifyDetailsNewComponent } from './modify-details-new/modify-details-new.component';
import { ProfileNeedyPersonComponent } from './profileNeedyperson/profile.component';
import { RequestStatusComponent } from './request-status/request-status.component';
import { RequestComponent } from './request/request.component';

@NgModule({
  declarations: [
    RequestComponent,
    RequestStatusComponent,
    ModifyDetailsNewComponent,
    ProfileNeedyPersonComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,

    RouterModule.forChild([
      {
        path: 'Need-Help/my-profile',
        component: ProfileNeedyPersonComponent,
        canActivate: [NeedyPersonGuardService],
      },
      {
        path: 'Need-Help/request-status',
        component: RequestStatusComponent,
        canActivate: [NeedyPersonGuardService],
      },
      {
        path: 'Need-Help/request',
        component: RequestComponent,
        canActivate: [NeedyPersonGuardService],
      },
      {
        path: 'Need-Help/modify-details',
        component: ModifyDetailsNewComponent,
        canActivate: [NeedyPersonGuardService],
      },
    ]),
  ],
})
export class NeedyPersonModule {}
