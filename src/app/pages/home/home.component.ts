import { Component } from '@angular/core';
import { ListPostComponent } from '../../components/list-post/list-post.component';
import { TopMenuComponent } from '../../components/top-menu/top-menu.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListPostComponent, TopMenuComponent, SideMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
