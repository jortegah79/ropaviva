import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { menuItem } from '../../interfaces/menuItem.interface';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


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
