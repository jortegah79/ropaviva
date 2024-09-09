import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import Category from "../models/category";
import { computed, inject } from '@angular/core';
import { CategoriesService } from '../service/categories.service';
import {  from, pipe, switchMap, tap } from 'rxjs';

/**
 * Aqui podriamos añadir tantas cosas quedamos guardar...
 */
interface CategoryState {
  categories: Category[]
}

const initialState: CategoryState = {
  categories: []
}

export const CategoryStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ categories }) => ({
    categories: computed(() => categories()),
    categoriesCount: computed(() => categories().length)
  })),
  withMethods((store, categoryServ = inject(CategoriesService)) => ({
   async loadCategories():  Promise<void>{      
      patchState(store,{ categories :await categoryServ.getCategorias()})      
   },    
  
  }))
)
