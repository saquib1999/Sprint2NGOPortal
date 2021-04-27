import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DonationDistribution } from '../models/DonationDistribution';
import { Employee } from '../models/Employee';
import { NeedyPerson } from '../models/NeedyPerson';
import { Request } from '../models/Request';

@Injectable({
  providedIn: 'root',
})
export class HttpEmployeeService {
  httpheaders = new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('token'),
  });
  baseUrl = 'http://localhost:9898/ngo/';
  constructor(private httpClient: HttpClient) {}

  public createNeedyPerson(needyPerson: NeedyPerson) {
    return this.httpClient.post<any>(
      this.baseUrl + 'create-needy-person',
      needyPerson,
      { headers: this.httpheaders }
    );
  }

  getAllNeedyPeople() {
    return this.httpClient.get<NeedyPerson[]>(this.baseUrl + 'needy-people', {
      headers: this.httpheaders,
    });
  }

  public deleteNeedyPeople(id: number) {
    return this.httpClient.delete<any>(
      this.baseUrl + 'delete-needy-person/' + id,
      { headers: this.httpheaders }
    );
  }

  public viewRequests() {
    return this.httpClient.get<Request[]>(
      this.baseUrl + 'employee/pending-request/',
      { headers: this.httpheaders }
    );
  }
  public approvedList() {
    return this.httpClient.get<DonationDistribution[]>(
      this.baseUrl + 'approved-list/' + sessionStorage.getItem('id'),
      {
        headers: this.httpheaders,
      }
    );
  }

  public pendingList() {
    return this.httpClient.get<DonationDistribution[]>(
      this.baseUrl + 'pending-list/' + sessionStorage.getItem('id'),
      {
        headers: this.httpheaders,
      }
    );
  }

  public approveRequest(request: any) {
    return this.httpClient.post<any>(
      this.baseUrl + 'employee/approve/',
      { id: sessionStorage.getItem('id'), request: request },
      {
        headers: this.httpheaders,
      }
    );
  }

  public distributedList() {
    return this.httpClient.get<DonationDistribution[]>(
      this.baseUrl + 'distributed-list/' + sessionStorage.getItem('id'),
      {
        headers: this.httpheaders,
      }
    );
  }
  public getNeedyPerson(id: any) {
    return this.httpClient.get<NeedyPerson>(
      this.baseUrl + 'needy-person-by-id/' + id,
      { headers: this.httpheaders }
    );
  }

  public helped(dd: DonationDistribution) {
    console.log(dd);
    console.log('saquib   ' + dd);
    return this.httpClient.patch<DonationDistribution>(
      this.baseUrl + 'help',
      dd,
      {
        headers: this.httpheaders,
      }
    );
  }

  public getProfileDetails(id: any) {
    return this.httpClient.get<Employee>(
      this.baseUrl + 'find-employee-by-id/' + id,
      { headers: this.httpheaders }
    );
  }
}
