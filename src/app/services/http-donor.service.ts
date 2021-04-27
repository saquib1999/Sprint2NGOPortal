import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IDonation } from '../models/donation';
import { IDonor } from '../models/donor';


@Injectable({
  providedIn: 'root'
})
export class HttpDonorService {
  httpheaders = new HttpHeaders({
    Authorization: 'Bearer ' + sessionStorage.getItem('token'),
  });
  baseUrl = 'http://localhost:9898/ngo/';
  constructor(private httpClient: HttpClient) { }
  getAllReceipt(): Observable<IDonation[]> {
    const url = `${this.baseUrl}receipts/all/${sessionStorage.getItem('id')}`;
    return this.httpClient.get<IDonation[]>(url, { headers:this.httpheaders });
  }
  getLastReceipt(): Observable<IDonation> {
    const url = `${this.baseUrl}receipts/last/${sessionStorage.getItem('id')}`;
    return this.httpClient.get<IDonation>(url, { headers:this.httpheaders });
  }

  makeDonation(donation: IDonation): Observable<IDonation> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post<IDonation>(`${this.baseUrl}donate/${sessionStorage.getItem('id')}`, donation, {
      headers: this.httpheaders,
    })
      .pipe(
        tap(data => console.log('makeDonation: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  registerDonor(donor: IDonor): Observable<IDonor> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // product.id = null;
    return this.httpClient.post<IDonor>(`${this.baseUrl}donor/register`, donor)
      .pipe(
        tap(data => console.log('registerDonor: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  
  handleError(handleError: any): import("rxjs").OperatorFunction<IDonor, any> {
    throw new Error('Method not implemented.');
  }

  getDonorDetails(): Observable<IDonor> {
    const url = `${this.baseUrl}find-donor-by-id/${sessionStorage.getItem('id')}`;
    return this.httpClient.get<IDonor>(url, { headers:this.httpheaders });
  }

}
