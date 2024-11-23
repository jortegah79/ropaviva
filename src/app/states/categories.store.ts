import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals'
import Category from "../models/category";
import { computed, inject } from '@angular/core';
import { CategoriesService } from '../service/categories.service';

/**
 * Aqui podriamos añadir tantas cosas quedamos guardar...
 */
type CategoryState = {
  categories: Category[],
  pagePagination: number,
  categorySelected: string

}

const initialState: CategoryState = {
  categories: [],
  pagePagination: 0,
  categorySelected: "-1"
}

export const CategoryStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ categories, pagePagination, categorySelected }) => ({
    categories: computed(() => categories()),
    categoriesCount: computed(() => categories().length),
    categoriesPaginate: computed(() => categories().length / 4),
    pagePagination: computed(() => pagePagination()),
    categorySelected: computed(() => categorySelected())
  })),
  withMethods((store, categoryServ = inject(CategoriesService)) => ({
    async loadCategories(): Promise<void> {
      patchState(store, { categories: await categoryServ.getCategorias() })
    },
    
    // all of these methods are helpers of Category paginator.
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
    async resetPagePaginator(): Promise<void> {
      patchState(store, { pagePagination: 0 })
    },
    //to Select category for page store-products
    async setCategorySelected(category: string): Promise<void> {
      patchState(store, { categorySelected: category })
    }

  }))
)
