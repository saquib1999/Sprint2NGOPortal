import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NeedyPerson } from 'src/app/models/NeedyPerson';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-needy-person',
  templateUrl: './needy-person.component.html',
  styleUrls: ['./needy-person.component.css'],
})
export class NeedyPersonComponent implements OnInit {
  person!: NeedyPerson;
  id!: string | null;
  constructor(
    private httpemployeeservice: HttpEmployeeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.httpemployeeservice
      .getNeedyPerson(this.id)
      .subscribe((result) => (this.person = result));
  }
}
