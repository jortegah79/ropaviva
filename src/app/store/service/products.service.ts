import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Product } from '../models/productResponse.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private http = inject(HttpClient);


  getProductsByCategory(category: number): Observable<Product[]> {
    
    const url: string = `${environment.baseurl}${environment.categories}/${category}/${environment.products}`;
 
    return this.http.get<Product[]>(url)
  }
}
