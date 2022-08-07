import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customers';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiControllerUrl: string = `${environment.apiUrl}/customers`; //property
  
  constructor(private httpClient: HttpClient) { }

  addCustomer(customer: Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(this.apiControllerUrl, customer)
  }
  getList(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.apiControllerUrl);
  }
  delete(id:number):Observable<Customer>{
    return this.httpClient.delete<Customer>(`${this.apiControllerUrl}/${id}`)
  }

  getCustomerById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.apiControllerUrl}/${id}`)
  }
  
  updateList(customer:Customer):Observable<Customer>{ // her verinin kendi içinde çekilebiklmesine olanak sağlar observable
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`,customer)
  }

 
}
