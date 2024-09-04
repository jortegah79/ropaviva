import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppbarComponent } from '../../components/appbar/appbar.component';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterModule,AppbarComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
