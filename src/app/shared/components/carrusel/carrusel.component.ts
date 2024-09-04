import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.scss'
})
export class CarruselComponent {

  private listImages = signal<string[]>(["assets/carrusel/image1.jpg", "assets/carrusel/image2.jpg", "assets/carrusel/image3.jpg"])

  public images=computed(()=>{
    return this.listImages();
  })
}
