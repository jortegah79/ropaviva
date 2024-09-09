import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: ` <h2 class="text-secondary fw-bold">{{title()}}</h2>`,
  styles: ``
})
export class TitleComponent {
  
  public title = input<string>(); 
  
  
}
