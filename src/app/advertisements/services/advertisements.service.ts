import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advertisement } from '../models/advertisement.model';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementsService {

  constructor(private httpClient: HttpClient) {
  }

  getAll$(): Observable<Advertisement[]> {
    const url = 'http://localhost:3000/advertisements';

    const httpParams = new HttpParams({
      fromObject: {
        _expand: 'category'
      }
    });

    return this.httpClient.get<Advertisement[]>(url, {
      params: httpParams
    });
  }
  save$(category: Advertisement): Observable<Advertisement> {
    if (category.id) {
      return this.update$(category);
    } else {
      return this.create$(category);
    }
  }

  update$(category: Advertisement): Observable<Advertisement> {
    const url = 'http://localhost:3000/advertisements/' + category.id;

    category.lastUpdated = new Date();

    return this.httpClient.patch<Advertisement>(url, category);
  }

  create$(category: Advertisement): Observable<Advertisement> {
    const url = 'http://localhost:3000/advertisements/';

    category.created = new Date();
    category.lastUpdated = new Date();

    return this.httpClient.post<Advertisement>(url, category);
  }
}

