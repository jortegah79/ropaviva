import { inject, Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private firebase = inject(FirebaseService);

  async getProducts() {
    const products: Product[] = await this.firebase.getData('products') as Product[];
    return products;
  }

  async getProductsByCategory(id: string) {
    return (await this.getProducts()).filter(prod => prod.category === id);
  }
  newProduct(product: Product) {
    this.firebase.createData('products', product);
  }
  editProduct(product: Product) {
    const id = product.id;
    const productObj = {
      name: product.name,
      description: product.description,
      category: product.category,
      images: product.images,
      price: product.price,
      stock: product.stock,
      status: product.status,
    }
    this.firebase.updateData('products', id!, productObj);
  }
  deleteProduct(product: Product) {
    if (!product.id) return;
    this.firebase.deleteData('products', product.id)
  }


}


