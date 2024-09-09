import { Component,  input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import Category from '../../../models/category';

@Component({
  selector: 'store-categoria',
  standalone: true,
  imports: [CommonModule],
  template: `
   <div class=" text-center my-2"  style="cursor: pointer;" (click)="toCategory(category() !.id)">
      <div [ngStyle]="{'background-image': 'url(' + category()!.imagenUrl + ')'}" class=" rounded-3 category mb-3" ></div>
      <h5 class="card-title fs-4 fw-bold text-indigo">{{category()!.name}}</h5>
   </div>`,
  styles: `
  .category{
    transition:all 0.75s ease;
    width:15vw;
    height:15vw;
    background-size:100%;
    background-position:center;
  }
  .category:hover{
    border:.25px solid black;
    box-shadow:0px 0px 3px 1px #55a, -2px -2px 3px 1px #99A,3px 3px 5px 2px #BBF ;
    background-size:115%;      
  }
  `
})
export class CategoriaComponent {

  public category = input<Category>();
  public emitCategory = output<any>();


  toCategory(id: any) {

    this.emitCategory.emit(id);
  }



}
