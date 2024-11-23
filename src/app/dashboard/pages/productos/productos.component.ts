import { Component, inject } from '@angular/core';
import { ProductStore } from '../../../states/products.store';
import { FormArray, FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductsService } from '../../../service/products.service';
import { Product } from '../../../models/product';
import * as bootstrap from 'bootstrap';
import { TitleComponent } from "../../components/title/title.component";
import { CommonModule } from '@angular/common';
import { CategoryStore } from '../../../states/categories.store';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TitleComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss'
})
export default class ProductosComponent {

  readonly store = inject(ProductStore);
  readonly catStore = inject(CategoryStore);

  private formBuilder = inject(FormBuilder);
  private productsService = inject(ProductsService);
  public productEditable?: Product;

  public productForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    category: ['', [Validators.required]],
    images: this.formBuilder.array([])
  });
  ngOnInit(): void {
    this.store.loadProducts();
    this.store.resetPagePaginator();
  }
  addImageForm() {
    const $image = new FormControl('', [Validators.required]);
    this.productForm.controls.images.push($image);
  }
  deleteImageForm(index: number) {
    this.productForm.controls['images'].value.splice(index, 1);
  }
  newProduct() {
    this.productEditable = undefined;
  }

  saveProduct(button: HTMLButtonElement) {

    if (this.productForm.valid) {
      const product: Product = {
        name: this.productForm.value.name,
        description: this.productForm.value.description,
        price: this.productForm.value.price,
        stock: this.productForm.value.stock,
        category: this.productForm.value.category,
        images: this.productForm.value.images,
        status: true
      } as Product;

      this.productsService.newProduct(product);
      button.click();
      this.store.loadProducts();
      this.productForm.reset();
    }
    if (this.productForm.dirty && this.productForm.invalid) {
      this.productForm.reset();
      return;
    }
  }
  editProduct(product: Product, element: HTMLDivElement) {

    const testModal = new bootstrap.Modal(element, {})
    testModal?.show()
    this.productEditable = product;

    this.productForm.controls.name.setValue(product.name);
    this.productForm.controls.description.setValue(product.description);
    this.productForm.controls.stock.setValue(product.stock);
    this.productForm.controls.price.setValue(product.price);
    this.productForm.controls.category.setValue(product.category);
    for (let i = 0; i < this.productForm.controls.images.length; i++) {
      this.productForm.controls.images.controls.at(i)?.setValue(product.images[i]);
    }
  }
  editProductData(button: HTMLButtonElement) {
    if (this.productForm.valid) {
      const product: Product = {
        ...this.productEditable,
        name: this.productForm.value.name,
        description: this.productForm.value.description,
        price: this.productForm.value.price,
        stock: this.productForm.value.stock,
        category: this.productForm.value.category,
        images: this.productForm.controls.images.value
      } as Product;
     
      this.productsService.editProduct(product);
      button.click();
      this.store.loadProducts();
      this.productForm.reset();
      this.productEditable = undefined;
    }
    if (this.productForm.dirty && this.productForm.invalid) {
      this.productForm.reset();
      return;
    }
  }
  deleteProduct(product: Product) {
    this.productsService.deleteProduct(product);
    this.store.loadProducts();
  }
  changeStatus(product: Product) {
    product.status = !product.status;
    this.productsService.editProduct(product);
    this.store.loadProducts();
  }
  selectEditable(product: Product) {
    console.log(product);

    this.productEditable = product;
  }
}
