import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-reversible',
  templateUrl: './card-reversible.component.html',
  styleUrls: ['./card-reversible.component.css']
})
export class CardReversibleComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
}
