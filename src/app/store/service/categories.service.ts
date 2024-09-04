import { HttpClient }         from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category }           from '../models/categoryResponse.model';
import { environment }        from '../../../environments/environment.development';
import {  Observable }        from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private http = inject(HttpClient);
 

  constructor() {  }

  getCategories(): Observable<Category[]>{

    const url = `${environment.baseurl}${environment.categories} `;
    return this.http.get<Category[]>(`${url}`);      
  }

  getCategory(id:number):Observable<Category>{

    const url = `${environment.baseurl}${environment.categories}/${id} `;
    return this.http.get<Category>(url);
  }



}
