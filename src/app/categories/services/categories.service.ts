import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll$(): Observable<Category[]> {
    const url = 'http://localhost:3000/categories';

    return this.httpClient.get<Category[]>(url);
  }

  create$(category: Category): Observable<Category> {
    const url = 'http://localhost:3000/categories';

    category.created = new Date();
    category.lastUpdated = new Date();

    return this.httpClient.post<Category>(url, category);
  }

  update$(category: Category): Observable<Category> {
    const url = 'http://localhost:3000/categories/' + category.id;

    category.lastUpdated = new Date();

    return this.httpClient.patch<Category>(url, category);
  }

  save$(category: Category): Observable<Category> {
    if (category.id) {
      return this.update$(category);
    } else {
      return this.create$(category);
    }
  }

  delete$(id: number): Observable<void> {
    const url = 'http://localhost:3000/categories/' + id;

    return this.httpClient.delete<void>(url);
  }

}
