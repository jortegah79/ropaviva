import {  inject, Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import Category from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private firebase = inject(FirebaseService);

  async getCategorias() {
    const categorias: Category[] = await this.firebase.getData('categories') as Category[];
    return categorias;
  }
  async getCategoryById(id:string){
    const categorias=this.getCategorias();
    const categoria= (await categorias).filter(categoria=> categoria.id===id);
    return categoria[0];
  }

  newCategory(category: Category) {
    this.firebase.createData('categories', category);    
  }
  editCategory(category: Category) {
    const id=category.id;
    const categoriaObj={
      name:category.name,
      imagenUrl:category.imagenUrl,
      status:category.status,
      isDeleted:category.isDeleted
    }
    this.firebase.updateData('categories',id!,categoriaObj) ;    
  }
  deleteCategory(category: Category) {
    if (!category.id) return;
      this.firebase.deleteData('categories', category.id)        
  }


}
