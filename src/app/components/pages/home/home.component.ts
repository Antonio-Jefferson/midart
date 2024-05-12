import { Component } from '@angular/core';
import { TopMenuComponent } from '../../top-menu/top-menu.component';
import { ListPostComponent } from '../../list-post/list-post.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopMenuComponent, ListPostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
