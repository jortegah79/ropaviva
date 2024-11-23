import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { computed, inject, signal } from "@angular/core";
import { ProductsService } from "../service/products.service";
import { Product } from "../models/product";

type ProductState = {
    products: Product[],
    pagePagination: number,
}

const initialState: ProductState = {
    products: [],
    pagePagination: 0,
}

export const ProductStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed(({ products, pagePagination }) => ({
        products: computed(() => products()),
        productsCount: computed(() => products.length),
        productsPaginate: computed(() => (products.length / 4)),
        productsPagePagination: computed(() => pagePagination()),
    })),
    withMethods((store, productsServ = inject(ProductsService)) => ({

        async loadProducts(): Promise<void> {
            patchState(store, { products: await productsServ.getProducts() })
        },
        async loadProductsByCategory(category:string):Promise<void>{
            patchState(store,{products:await productsServ.getProductsByCategory(category)})
        },
        // all of these methods are helpers of Category paginator.
        async nextPagePaginator(): Promise<void> {
            if (store.pagePagination() + 1 <= store.productsPaginate()) {
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
        }
    }))

)
