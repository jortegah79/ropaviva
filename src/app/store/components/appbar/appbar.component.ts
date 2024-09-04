import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'store-appbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.scss'
})
export class AppbarComponent {

  
login() {
throw new Error('Method not implemented.');
}
toFavorites() {
throw new Error('Method not implemented.');
}
toMyCart() {
throw new Error('Method not implemented.');
}

}
