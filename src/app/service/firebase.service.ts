import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getFirestore, Firestore, addDoc, collection, getDocs, doc, updateDoc, deleteDoc, QueryDocumentSnapshot, DocumentData } from "firebase/firestore";
import Category from '../models/category';
import { conversion } from './conversionOptions.enum';
import { environment } from '../../environments/environment.development';

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
      const items = itemSnapshot.docs.map(item => this.selectConversion(coleccion, item) as Category);
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

  async updateData(coleccion: string, categoriaId: string, objCollection: any) {
    try {
      const docRef = doc(this.db, coleccion, categoriaId);
      await updateDoc(docRef, objCollection);
      console.log(`${coleccion} actualizada con éxito`);
    } catch (error) {
      console.error('Error al actualizar la categoría:', error);
      throw error;
    }
  }

  async deleteData(coleccion: string, categoriaId: string) {
    try {
      const docRef = doc(this.db, coleccion, categoriaId);
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
        const results = this.convertoToCategory(data);
        return results;
        break;
      case conversion.Product:
        return [];
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

}
