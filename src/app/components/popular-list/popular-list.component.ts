import { Component } from '@angular/core';
import { CardPopularComponent } from './card-popular/card-popular.component';

@Component({
  selector: 'app-popular-list',
  standalone: true,
  imports: [CardPopularComponent],
  templateUrl: './popular-list.component.html',
  styleUrl: './popular-list.component.scss'
})
export class PopularListComponent {

}
