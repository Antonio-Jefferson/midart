import { Component } from '@angular/core';
import { CardGroupComponent } from './card-group/card-group.component';

@Component({
  selector: 'app-list-popular-group',
  standalone: true,
  imports: [CardGroupComponent],
  templateUrl: './list-popular-group.component.html',
  styleUrl: './list-popular-group.component.scss'
})
export class ListPopularGroupComponent {

}
