import { Component } from '@angular/core';
import { ListPopularGroupComponent } from '../list-popular-group/list-popular-group.component';
import { PopularListComponent } from '../popular-list/popular-list.component';

@Component({
  selector: 'app-side-bar-dashboard',
  standalone: true,
  imports: [ListPopularGroupComponent, PopularListComponent],
  templateUrl: './side-bar-dashboard.component.html',
  styleUrl: './side-bar-dashboard.component.scss'
})
export class SideBarDashboardComponent {

}
