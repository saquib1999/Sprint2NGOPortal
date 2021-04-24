import { Component, OnInit } from '@angular/core';
import { HttpEmployeeService } from 'src/app/services/http-employee.service';

@Component({
  selector: 'app-add-needy-person',
  templateUrl: './add-needy-person.component.html',
  styleUrls: ['./add-needy-person.component.css'],
})
export class AddNeedyPersonComponent implements OnInit {
  data!: any;
  constructor(private httpEmployeeService: HttpEmployeeService) {}

  ngOnInit(): void {
    this.httpEmployeeService.getAllNeedyPeople().subscribe(
      (result) => {
        this.data = result;
      },
      (err) => {
        console.log(err), alert('Error');
      }
    );
  }
}
