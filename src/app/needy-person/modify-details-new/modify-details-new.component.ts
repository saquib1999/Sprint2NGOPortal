import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpNeedyPersonService } from 'src/app/services/http-needy-person.service';
import { INeedyPeople } from '../NeedyPeople';

@Component({
  selector: 'app-modify-details-new',
  templateUrl: './modify-details-new.component.html',
  styleUrls: ['./modify-details-new.component.css'],
})
export class ModifyDetailsNewComponent implements OnInit {
  pageTitle = 'Modify Details';
  modifyDetailsForm!: FormGroup;
  needyPerson!: INeedyPeople;

  constructor(
    private router: Router,
    private needyPersonService: HttpNeedyPersonService
  ) {}

  ngOnInit(): void {
    // console.log(this.needyPerson.name);
    this.modifyDetailsForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phone: new FormControl('', [Validators.required]),
      familyIncome: new FormControl('', [Validators.required]),
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        pin: new FormControl('', [Validators.required]),
        landmark: new FormControl('', [Validators.required]),
      }),
    });
  }

  modifyDetails() {
    if (this.modifyDetailsForm.valid) {
      this.needyPersonService.modify(this.modifyDetailsForm.value).subscribe(
        (result) => {
          console.log(result);
          this.router.navigate(['/Need-Help/my-profile']);
        },
        (err) => console.log('Error')
      );
    }
  }
}
