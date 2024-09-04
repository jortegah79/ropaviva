import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../service/categories.service';
import { switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductsService } from '../../service/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent {

  private activatedRoute  = inject(ActivatedRoute);
  private categoryService = inject(CategoriesService);
  private productsService = inject(ProductsService);

  private category=toSignal(this.activatedRoute.params.pipe(switchMap(({id})=>this.categoryService.getCategory(id))));
  private products=toSignal(this.activatedRoute.params.pipe(switchMap( ({id})=>this.productsService.getProductsByCategory(id) )))

  public categoria=computed(()=> this.category() );
  public productos=computed(()=>this.products())

  constructor() {
      
  }

}
