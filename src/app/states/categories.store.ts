import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import Category from "../models/category";
import { computed, inject } from '@angular/core';
import { CategoriesService } from '../service/categories.service';
import { from, pipe, switchMap, tap } from 'rxjs';

/**
 * Aqui podriamos añadir tantas cosas quedamos guardar...
 */
interface CategoryState {
  categories: Category[],
  pagePagination: number,
}

const initialState: CategoryState = {
  categories: [],
  pagePagination: 0
}

export const CategoryStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ categories, pagePagination }) => ({
    categories: computed(() => categories()),
    categoriesCount: computed(() => categories().length),
    categoriesPaginate: computed(() => categories().length / 4),
    pagePagination: computed(() => pagePagination())
  })),
  withMethods((store, categoryServ = inject(CategoriesService)) => ({
    async loadCategories(): Promise<void> {
      patchState(store, { categories: await categoryServ.getCategorias() })
    },
    async nextPagePaginator(): Promise<void> {
      if (store.pagePagination() + 1 <= store.categoriesPaginate()) {
        patchState(store, { pagePagination: store.pagePagination() + 1 })
      }
    },
   async previousPagePaginator(): Promise<void> {
      if (store.pagePagination() - 1 >= 0) {
        patchState(store, { pagePagination: store.pagePagination() - 1 })
      }
    },
    async resetPagePaginator():Promise<void>{
      patchState(store,{pagePagination:0})
    }

  }))
)
