import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl,  ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from "../../components/title/title.component";
import { CommonModule } from '@angular/common';
import { CategoryStore } from '../../../states/categories.store';
import Category from '../../../models/category';
import { CategoriesService } from '../../../service/categories.service';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [TitleComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export default class CategoriasComponent implements OnInit {
  
  readonly store = inject(CategoryStore);
  private formBuilder = inject(FormBuilder);
  private categoriesService = inject(CategoriesService);

  
  public categoryForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.min(3)]),
    imagenUrl: new FormControl('', [Validators.required, Validators.min(7)])
  });
  
  ngOnInit(): void {
    this.store.loadCategories();
  }
  
  saveCategory(button:HTMLButtonElement) {
    if (this.categoryForm.valid) {
      const category: Category = {
        name: this.categoryForm.value.name,
        imagenUrl: this.categoryForm.value.imagenUrl,
        status: true,
        isDeleted: false
      } as Category;      
      this.categoriesService.newCategory(category);
      button.click();
      this.store.loadCategories();
      this.categoryForm.reset();
    }    
    if (this.categoryForm.dirty && this.categoryForm.invalid) {
      this.categoryForm.reset();
      return;
    }
  }
  deleteCategory(category:Category) {
    this.categoriesService.deleteCategory(category);
    this.store.loadCategories();
  }
}
