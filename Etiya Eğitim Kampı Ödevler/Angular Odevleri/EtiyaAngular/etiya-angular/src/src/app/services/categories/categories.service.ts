import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Categories } from '../../models/categories';

@Injectable({
  providedIn: 'root'
})
// export class CategoriesService {
//   apiControllerUrl: string =`${environment.apiUrl}/categories`;
//   constructor(private httpClient: HttpClient){}
//   getListCategories(): Observable<Categories[]>{

//     return this.httpClient.get<Categories[]>(`${this.apiControllerUrl}`);
//   }
  
//   getById(id:number): Observable<Categories> {
//    return this.httpClient.get<Categories>(`${this.apiControllerUrl}/${id}`);
//   }
// }


export class CategoriesService {
  apiControllerUrl: string = `${environment.apiUrl}/categories`
  
  constructor(private httpClient:HttpClient) { }

  getCategoryList():Observable<Categories[]>{
    return this.httpClient.get<Categories[]>(this.apiControllerUrl)
  }
}