import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent {
  expandido = -1; // Inicialmente, ninguna pregunta está expandida

  toggleFaq(index: number) {
    this.expandido = this.expandido === index ? -1 : index;
  }
  
  expandido9=!false
  constructor() {}

}
