import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, Firestore, addDoc, collection, getDocs, doc, updateDoc, deleteDoc, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import Category from '../models/category';
import { conversion } from './conversionOptions.enum';
import { environment } from '../../environments/environment.development';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private firebaseConfig = environment.firebaseConfig;
  private db: Firestore;

  constructor() {
    const app = initializeApp(this.firebaseConfig);
    this.db = getFirestore(app);

  }
  async getData(coleccion: string) {
    try {
      const itemSnapshot = await getDocs(collection(this.db, coleccion));
      const items = itemSnapshot.docs.map(item => this.selectConversion(coleccion, item));
      return items ? items : [];

    } catch (error) {
      console.error(`Error al obtener ${coleccion}: ${error}`);
      throw error;
    }
  }

  async createData(coleccion: string, objColleccion: any) {
    try {
      const docREf = await addDoc(collection(this.db, coleccion), objColleccion);
      return docREf.id;
    } catch (error) {
      console.error(`Error al añadir ${coleccion}: ${error}`);
      throw error;
    }
  }

  async updateData(coleccion: string, objId: string, objCollection: any) {
    try {
      const docRef = doc(this.db, coleccion, objId);
      await updateDoc(docRef, objCollection);
      console.log(`${coleccion} actualizada con éxito`);
    } catch (error) {
      console.error('Error al actualizar :', error);
      throw error;
    }
  }

  async deleteData(coleccion: string, objId: string) {
    try {
      const docRef = doc(this.db, coleccion, objId);
      await deleteDoc(docRef);
      console.log(`${coleccion} eliminada con éxito`);
    } catch (error) {
      console.error(`Error al eliminar la ${coleccion}: ${error}`);
      throw error;
    }
  }

  private selectConversion(conv: string, data: QueryDocumentSnapshot<DocumentData, DocumentData>) {
   
    switch (conv) {
      case conversion.Category:
        return this.convertoToCategory(data);        
        break;
      case conversion.Product:
        return this.convertoToProduct(data);        
        break;
      case conversion.User:
        return [];
        break;
      case conversion.Cart:
        return [];
        break;
      default:
        return [];
        break;
    }
  }

  private convertoToCategory(data: QueryDocumentSnapshot<DocumentData, DocumentData>): Category {   
    const categoria: Category = {
      id: data.id,
      name: data.data()['name'],
      imagenUrl: data.data()['imagenUrl'],
      isDeleted: data.data()['isDeleted'],
      status: data.data()['status']
    }  
    return categoria;
  }
  private convertoToProduct(data: QueryDocumentSnapshot<DocumentData, DocumentData>): Product {   
    const product: Product = {
      id:         data.id,
      name:       data.data()['name'],
      description:data.data()['description'],
      category:   data.data()['category'],
      images:     data.data()['images'],
      price:      data.data()['price'],
      stock:      data.data()['stock'],      
      status:     data.data()['status']
    }  
    return product;
  }
}
