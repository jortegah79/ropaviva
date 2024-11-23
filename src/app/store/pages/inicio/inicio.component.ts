import { CommonModule } from '@angular/common';
import { Component,  inject } from '@angular/core';
import { CarruselComponent } from "../../components/carrusel/carrusel.component";
import { CategoriesService } from '../../../service/categories.service';
import { Router } from '@angular/router';
import { CategoriaComponent } from '../../components/categoria/categoria.component';
import { CategoryStore } from '../../../states/categories.store';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, CarruselComponent,CategoriaComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  
  private categoriesService = inject(CategoriesService);
  private router=inject(Router);
  readonly store=inject(CategoryStore);
 
  toCategory(categoria:string) {
    //this.store.setCategorySelected(categoria);
    this.router.navigateByUrl(`store/productos/${categoria}`);

  }
  constructor(){
    this.store.loadCategories();
   
  }
}
  