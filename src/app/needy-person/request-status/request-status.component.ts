import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HttpNeedyPersonService } from 'src/app/services/http-needy-person.service';
import { IRequest } from '../Request';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {

  pageTitle = "Requests"
  errorMessage = ''
  requests: IRequest[] | undefined;

  constructor(
    private router: Router,
    private needyPersonService: HttpNeedyPersonService
    ) { }

  ngOnInit(): void {
    this.needyPersonService.viewRequests().subscribe({
      next: requests => {
        this.requests = requests;
      },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/Need-Help']);
  }

}
