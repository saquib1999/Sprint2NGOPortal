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
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(4),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[1-9][0-9]{9,12}'),
        Validators.minLength(10),
      ]),
      familyIncome: new FormControl('', [
        Validators.required,
        Validators.min(1),
      ]),
      address: new FormGroup({
        city: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        state: new FormControl('', [
          Validators.required,
          Validators.pattern('[a-zA-Z ]*'),
        ]),
        pin: new FormControl('', [
          Validators.required,
          Validators.pattern('[1-9][0-9]{5}'),
        ]),
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

  get address() {
    return this.modifyDetailsForm.controls.address as FormGroup;
  }
}
