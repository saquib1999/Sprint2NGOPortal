import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-needy-person-dashboard',
  templateUrl: './needy-person-dashboard.component.html',
  styleUrls: ['./needy-person-dashboard.component.css'],
})
export class NeedyPersonDashboardComponent implements OnInit {
  
  constructor(private service: AuthServiceService) {}

  ngOnInit(): void {}

}
