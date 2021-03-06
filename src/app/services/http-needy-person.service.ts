import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { INeedyPeople } from '../needy-person/NeedyPeople';
import { IRequest } from '../needy-person/Request';

@Injectable({
  providedIn: 'root',
})
export class HttpNeedyPersonService {
  httpheaders = new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('token'),
  });

  baseUrl = 'http://localhost:9898/ngo/';

  constructor(private httpClient: HttpClient) {}

  registerNeedyPerson(needyPerson: INeedyPeople): Observable<INeedyPeople> {
    const url = `${this.baseUrl}needy-person/register`;
    return this.httpClient.post<INeedyPeople>(url, needyPerson);
  }

  createRequest(request: any) {
    const url = `${this.baseUrl}request/${sessionStorage.getItem('id')}`;
    return this.httpClient.post<IRequest>(url, request, {
      headers: this.httpheaders,
    });
  }

  viewRequests(): Observable<IRequest[]> {
    const url = `${this.baseUrl}request-status/${sessionStorage.getItem('id')}`;
    return this.httpClient.get<IRequest[]>(url, { headers: this.httpheaders });
  }

  modify(needyPerson: INeedyPeople) {
    const url = `${
      this.baseUrl
    }needy-person/modify-details/${sessionStorage.getItem('id')}`;
    return this.httpClient.patch<IRequest>(url, needyPerson, {
      headers: this.httpheaders,
    });
  }

  getNeedyPersonDetails(): Observable<INeedyPeople> {
    const url = `${
      this.baseUrl
    }find-needy-person-by-id/${sessionStorage.getItem('id')}`;
    return this.httpClient.get<INeedyPeople>(url, {
      headers: this.httpheaders,
    });
  }
}
