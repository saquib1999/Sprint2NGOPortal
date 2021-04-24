import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  token = '';
  private response!: Observable<any>;
  baseUrl = 'http://localhost:9898/ngo/';
  constructor(private http: HttpClient) {}
  login(data: FormGroup): Observable<any> {
    this.response = this.http.post(this.baseUrl + 'authenticate', data);

    this.response.subscribe(
      (result) => {
        this.token = result.token;
        console.log('Success');
        sessionStorage.setItem('username', '');
        let tokenStr = result.token;
        sessionStorage.setItem('token', tokenStr);
        sessionStorage.setItem('userType', result.userType);
        sessionStorage.setItem('id', result.id);
      },
      (err) => {
        console.log('HTTP Error', err);
      }
    );
    return this.response;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('userType');
  }
}
