import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarruselComponent } from "../../../shared/components/carrusel/carrusel.component";
import { CategoriesService } from '../../service/categories.service';
import { Router } from '@angular/router';
import { CategoriaComponent } from '../../components/categoria/categoria.component';


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

  private allCategories = toSignal(this.categoriesService.getCategories());

  public categories = computed(() => {  
    if (!this.allCategories()) return undefined;
    return this.allCategories()?.filter(category => category.image !== "https://placeimg.com/640/480/any");
  });
  
  toCategory(categoria:number) {

    this.router.navigateByUrl(`store/productos/${categoria}`);

  }
}
  