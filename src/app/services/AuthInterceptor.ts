import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEmployeeService } from './http-employee.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private service: HttpEmployeeService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      req = req.clone({
        setHeaders: {
          Authorization: 'Bearer' + sessionStorage.getItem('token'),
        },
      });
    }

    return next.handle(req);

    /*  if (req.headers.get('Anonymous') !== undefined) {
        const newHeaders = req.headers.delete('Anonymous')
        const newRequest = req.clone({ headers: newHeaders });
        return next.handle(newRequest);
      } 
      else 
      {console.log('in else part of interceptor')
        req = req.clone({
            setHeaders: {
                'Authorization': `Bearer ${sessionStorage.getItem('token')}`,
           
              'Content-Type' : 'application/json; charset=utf-8',
              'Accept'       : 'application/json'
               },
          });
          console.log(req.headers.getAll('Authorization'))
          console.log(req.headers.keys)
          return next.handle(req);}
            
      
           */
  }
}
