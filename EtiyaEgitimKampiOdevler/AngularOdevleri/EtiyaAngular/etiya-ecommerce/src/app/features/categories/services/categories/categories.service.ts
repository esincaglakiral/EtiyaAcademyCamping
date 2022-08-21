import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {Category} from '../../models/category';

@Injectable()
export class CategoriesService {
  apiControllerUrl = `${environment.apiUrl}/categories`;

  constructor(private httpClient: HttpClient) {}

  getList(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiControllerUrl);
  }
}
