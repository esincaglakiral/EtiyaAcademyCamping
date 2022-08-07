import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Product } from '../../models/product';
import { ProductsModule } from '../../products.module';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   apiControllerUrl: string =`${environment.apiUrl}/products`;
  
   constructor(private httpClient: HttpClient){}

   getList(): Observable<Product[]>{

     return this.httpClient.get<Product[]>(this.apiControllerUrl);
   }
   
  //  getById(id:number): Observable<Product> {
  //   return this.httpClient.get<Product>(`${this.apiControllerUrl}/${id}`);
  //  }

   getProductById(id:number):Observable<Product>{
    return this.httpClient.get<Product>(`${this.apiControllerUrl}/${id}`)
  }

   addProduct(product:Product): Observable<Product>{
    return this.httpClient.post<Product>(this.apiControllerUrl,product);
  }

   deleteProduct(id:number):Observable<Product>{
    return this.httpClient.delete<Product>(`${this.apiControllerUrl}/${id}`)
  }

   updateProduct(product:Product):Observable<Product>{
    return this.httpClient.put<Product>(`${this.apiControllerUrl}/${product.id}`,product)
  }
}
