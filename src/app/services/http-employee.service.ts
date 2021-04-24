import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NeedyPerson } from '../models/NeedyPerson';

@Injectable({
  providedIn: 'root',
})
export class HttpEmployeeService {
  httpheaders = new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('token'),
  });
  baseUrl = 'http://localhost:9898/ngo/';
  constructor(private httpClient: HttpClient) {}

  getAllNeedyPeople() {
    /*  let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   */

    return this.httpClient.get(this.baseUrl + 'needy-people', {
      headers: this.httpheaders,
    });
  }

  public deleteNeedyPeople(needyPerson: NeedyPerson) {
    return this.httpClient.delete<any>(this.baseUrl + 'delete-needy-person/');
  }

  public createNeedyPerson(needyPerson: NeedyPerson) {
    /* let username='javainuse'
    let password='password'
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   */
    return this.httpClient.post<any>(
      this.baseUrl + 'create-needy-person',
      needyPerson
    );
  }
  public viewRequests() {
    return this.httpClient.get<any>(
      this.baseUrl + 'employee/pending-request/',
      { headers: this.httpheaders }
    );
  }
}
