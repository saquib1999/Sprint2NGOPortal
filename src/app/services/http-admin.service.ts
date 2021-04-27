import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { DonationBox } from '../models/DonationBox';
import { DonationDistribution } from '../models/DonationDistribution';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class HttpAdminService {
  httpheaders = new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('token'),
  });
  baseUrl = 'http://localhost:9898/ngo/';

  constructor(private httpClient: HttpClient) {}

  public createEmployee(employee: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<Employee>(
      `${this.baseUrl}add-employee`,
      employee,
      { headers: this.httpheaders }
    );
  }

  public updateEmployee(employee: Employee) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.put<Employee>(
      `${this.baseUrl}modify-employee`,
      employee,
      { headers: this.httpheaders }
    );
  }

  public deleteEmployee(username: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<any>(
      `${this.baseUrl}delete-employee/${username}`,
      { headers: this.httpheaders }
    );
  }

  public getEmployeeById(id: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<Employee>(
      this.baseUrl + 'find-employee-by-id/' + id,
      { headers: this.httpheaders }
    );
  }

  public getEmployeesByName(name: string): Observable<Employee[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<Employee[]>(
      this.baseUrl + 'find-employee-by-name/' + `${name}`,
      { headers: this.httpheaders }
    );
  }

  public getAllEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(
      this.baseUrl + 'find-all-employees',
      { headers: this.httpheaders }
    );
  }

  public getAllPendingDonations(): Observable<DonationDistribution[]> {
    return this.httpClient.get<DonationDistribution[]>(
      `${this.baseUrl}find-all-donations`,
      { headers: this.httpheaders }
    );
  }

  public approveDonation(dd: DonationDistribution) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.patch<DonationDistribution>(
      `${this.baseUrl}approve-donation`,
      dd,
      { headers: this.httpheaders }
    );
  }

  public showDonationBox() {
    return this.httpClient.get<DonationBox[]>(this.baseUrl + 'find-all-ngos', {
      headers: this.httpheaders,
    });
  }

  public findDonationById(id: string | null) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.get<DonationDistribution>(
      this.baseUrl + 'donation/' + id,
      { headers: this.httpheaders }
    );
  }
}
