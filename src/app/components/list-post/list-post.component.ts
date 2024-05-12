import { Component } from '@angular/core';
import { CardPostComponent } from '../card-post/card-post.component';

@Component({
  selector: 'app-list-post',
  standalone: true,
  imports: [CardPostComponent],
  templateUrl: './list-post.component.html',
  styleUrl: './list-post.component.scss'
})
export class ListPostComponent {

}
