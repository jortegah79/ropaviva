import { Component,  effect,  input } from '@angular/core';
import { ImagePipe } from "../../pipes/image.pipe";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'component-producto',
  standalone: true,
  imports: [ImagePipe,CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
toProduct(arg0: any) {
throw new Error('Method not implemented.');
}

//public producto=input.required<Product>();



constructor() {
  // Definimos un effect con tipo de retorno void
  // effect((): void => {
  //    console.log( this.product.);
     
  // });
}

}
