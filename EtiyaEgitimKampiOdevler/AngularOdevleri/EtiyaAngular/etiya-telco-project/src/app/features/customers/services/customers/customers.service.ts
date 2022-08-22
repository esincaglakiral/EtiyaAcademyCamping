import { Customer } from './../../models/customer';
import { Observable } from 'rxjs';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiControllerUrl : string = `${environment.apiUrl}/customers`;
  constructor(private httpClient: HttpClient) { }

  getList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.apiControllerUrl);
  }
}
