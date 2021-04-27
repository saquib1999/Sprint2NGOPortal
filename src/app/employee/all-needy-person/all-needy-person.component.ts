import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NeedyPerson } from 'src/app/models/NeedyPerson';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-all-needy-person',
  templateUrl: './all-needy-person.component.html',
  styleUrls: ['./all-needy-person.component.css'],
})
export class AllNeedyPersonComponent implements OnInit {
  searchId!: number;
  needyPeopleFilter: NeedyPerson[] = [];
  needyId!: number;
  totalNeedy: number = 0;
  private _listFilter: string = '';
  needyPeople!: NeedyPerson[];
  addNeedyPersonForm!: FormGroup;
  constructor(
    private httpEmployeeService: HttpEmployeeService,
    private router: Router
  ) {}

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.needyPeopleFilter = this.performFilter(value);
    this.totalNeedy = this.needyPeopleFilter.length;
  }

  ngOnInit(): void {
    this.formInit();
    this.httpEmployeeService.getAllNeedyPeople().subscribe(
      (response) => {
        this.needyPeople = response;
        this.needyPeopleFilter = response;
      },
      (err) => console.log(err)
    );
  }

  formInit() {
    this.addNeedyPersonForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      familyIncome: new FormControl('', [Validators.required]),
      userLoginDetails: new FormGroup({
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      }),
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        pin: new FormControl('', [Validators.required]),
        landmark: new FormControl('', [Validators.required]),
      }),
    });
  }

  performFilter(listFilter: string) {
    listFilter = listFilter.toLocaleUpperCase();
    return this.needyPeople.filter((needyPerson: NeedyPerson) =>
      needyPerson.name.includes(listFilter)
    );
  }
  search() {
    if (this.searchId != null)
      this.router.navigate(['employee/all-needy-person/' + this.searchId]);
  }

  needyPersonDetails() {}

  deleteNeedy(id: number) {
    this.httpEmployeeService.deleteNeedyPeople(id).subscribe(
      (result) => {
        console.log(result);
        alert('Record Deleted');
        window.location.reload();
      },
      (err) => {
        alert('Error');
        console.log(err);
      }
    );
  }

  submitForm() {}
}
