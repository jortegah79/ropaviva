import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleComponent } from "../../components/title/title.component";
import { CommonModule } from '@angular/common';
import { CategoryStore } from '../../../states/categories.store';
import Category from '../../../models/category';
import { CategoriesService } from '../../../service/categories.service';
import * as bootstrap from 'bootstrap';
import { IonFab } from "@ionic/angular/standalone";

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [IonFab, TitleComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.scss'
})
export default class CategoriasComponent implements OnInit {

  readonly store = inject(CategoryStore);
  private formBuilder = inject(FormBuilder);
  private categoriesService = inject(CategoriesService);
  public categoryEditable?: Category;

  public categoryForm = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.min(3)]),
    imagenUrl: new FormControl('', [Validators.required, Validators.min(7)])
  });

  ngOnInit(): void {
    this.store.loadCategories();
    this.store.resetPagePaginator();
  }

  saveCategory(button: HTMLButtonElement) {
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
  editCategory(category: Category, element: HTMLDivElement) {

    const testModal = new bootstrap.Modal(element, {})
    testModal?.show()
    this.categoryEditable = category;
    this.categoryForm.controls.name.setValue(category.name);
    this.categoryForm.controls.imagenUrl.setValue(category.imagenUrl);
  }
  editCategoryData(button: HTMLButtonElement) {
    if (this.categoryForm.valid) {
      const category: Category = {
        ...this.categoryEditable,
        name: this.categoryForm.value.name,
        imagenUrl: this.categoryForm.value.imagenUrl,
      } as Category;

      this.categoriesService.editCategory(category);
      button.click();
      this.store.loadCategories();
      this.categoryForm.reset();
      this.categoryEditable = undefined;
    }
    if (this.categoryForm.dirty && this.categoryForm.invalid) {
      this.categoryForm.reset();
      return;
    }
  }
  deleteCategory(category: Category) {
    this.categoriesService.deleteCategory(category);
    this.store.loadCategories();
  }
  changeStatus(category: Category) {
    category.status = !category.status;
    this.categoriesService.editCategory(category);
    this.store.loadCategories();
  }
}
