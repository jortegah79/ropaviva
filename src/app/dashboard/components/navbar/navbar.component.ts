import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { menuItem } from '../../interfaces/menuItem.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  public menuRutas = signal<menuItem[]>([
    {
      path: "categorias",
      name: "Categorias",
      icon: "bi bi-bookmark"
    },
    {
      path: "productos",
      name: "Productos",
      icon: "bi bi-bicycle"
    },
    {
      path: "producto/:id",
      name: "",
      icon: ""
    },
    {
      path: "cart",
      name: "Pedidos",
      icon: "bi bi-cart"
    },
    {
      path: "/store/inicio",
      name: "Inicio-Store",
      icon: "bi bi-cart-fill"
    }
  ]);
  
}
