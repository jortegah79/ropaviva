import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { SidebarminComponent } from '../../components/sidebarmin/sidebarmin.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-template',
  standalone: true,
  imports: [RouterModule,SidebarComponent,SidebarminComponent,NavbarComponent],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent {

}
