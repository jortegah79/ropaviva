import { Routes } from '@angular/router';
import { TemplateComponent } from './store/pages/template/template.component';

export const routes: Routes = [
    {
        path: "store",
        component: TemplateComponent,
        children: [

            {
                path: "inicio",
                loadComponent: () => import("./store/pages/inicio/inicio.component").then(p => p.InicioComponent)
            },
            {
                path: "productos/:id",
                loadComponent: () => import("./store/pages/productos/productos.component").then(p => p.ProductosComponent)
            },
            {
                path: "producto/:id",
                loadComponent: () => import("./store/pages/producto/producto.component").then(p => p.ProductoComponent)
            },
            {
                path: "cart",
                loadComponent: () => import("./store/pages/cart/cart.component").then(p => p.CartComponent)
            },
            {
                path: "",
                pathMatch: "full",
                redirectTo: "inicio"
            }

        ]
    },
    {
        path: "",
        pathMatch: "full",
        redirectTo: "store"
    },
    {
        path: "**",
        loadComponent: () => import('./shared/pages/errorpage/errorpage.component').then(p => p.ErrorpageComponent)
    }
];
