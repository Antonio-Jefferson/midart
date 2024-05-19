import { Component } from '@angular/core';
import { ListPostComponent } from '../../list-post/list-post.component';
import { TopMenuComponent } from '../../top-menu/top-menu.component';
import { MenuMobileComponent } from '../../menu-mobile/menu-mobile.component';
import { SideMenuComponent } from '../../side-menu/side-menu.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListPostComponent, TopMenuComponent, MenuMobileComponent, SideMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
}
