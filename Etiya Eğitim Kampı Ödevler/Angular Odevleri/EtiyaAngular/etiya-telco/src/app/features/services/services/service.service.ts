import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/services-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiControllerUrl:string = `${environment.apiUrl}/services`;
  constructor(private httpClient:HttpClient) { }

  getList():Observable<Service[]>{
    return this.httpClient.get<Service[]>(this.apiControllerUrl)
  }

  getById(id:number):Observable<Service>{
    return this.httpClient.get<Service>(`${this.apiControllerUrl}/${id}`)
  }

  addService(service:Service): Observable<Service>{
    return this.httpClient.post<Service>(this.apiControllerUrl,service);
  }

  updateService(service:Service):Observable<Service>{
    return this.httpClient.put<Service>(`${this.apiControllerUrl}/${service.id}`,service)
  }

  removeService(id:number):Observable<Service>{
    return this.httpClient.delete<Service>(`${this.apiControllerUrl}/${id}`)
  }
  
}
