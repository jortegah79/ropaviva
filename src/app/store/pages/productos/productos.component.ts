import { Component, computed, inject, OnInit, signal, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService } from '../../../service/categories.service';
import { ProductsService } from '../../../service/products.service';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from "../../components/producto/producto.component";
import { CategoryStore } from '../../../states/categories.store';
import { ProductStore } from '../../../states/products.store';
import { Observable, switchMap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { Product } from '../../../models/product';
import Category from '../../../models/category';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, ProductoComponent],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export class ProductosComponent implements OnInit{
  @ViewChild('image') image!: HTMLImageElement;


  private activatedRoute = inject(ActivatedRoute);
  private categoryService = inject(CategoriesService);
  private productsService = inject(ProductsService);

  readonly categoria = signal<Category | undefined>(undefined);
  public productos = signal<Product[]>([]);

  ngOnInit() {

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.categoryService.getCategoryById(id)))
      .subscribe(category => {
        this.categoria.set(category); 
        this.getData(category.id)
      });

    
    
    
  }
  getData(id:string){
    
    this.productsService.getProductsByCategory(id)
      .then(productos =>{
      this.productos.set(productos);
      console.log(productos);
  
    })
  }

}