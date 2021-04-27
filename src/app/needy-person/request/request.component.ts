import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpNeedyPersonService } from 'src/app/services/http-needy-person.service';
import { IRequest } from '../Request';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
})
export class RequestComponent implements OnInit {
  pageTitle = 'Generate Request';
  requestForm!: FormGroup;
  request!: IRequest;

  constructor(
    private router: Router,
    private needyPersonService: HttpNeedyPersonService
  ) {}

  ngOnInit(): void {
    this.requestForm = new FormGroup({
      amountOrQuantity: new FormControl('', [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      donationType: new FormControl('MONEY'),
    });
  }

  addRequest() {
    if (this.requestForm.valid) {
      this.needyPersonService.createRequest(this.requestForm.value).subscribe(
        (result: any) => {
          console.log(result);
          this.router.navigate(['/Need-Help']);
        },
        (err: any) => console.log('Error')
      );
    }
  }

  onBack(): void {
    this.router.navigate(['/Need-Help']);
  }
}
