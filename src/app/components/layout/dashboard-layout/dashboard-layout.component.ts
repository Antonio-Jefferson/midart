import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarDashboardComponent } from '../../sidebar-dashboard/side-bar-dashboard.component';
import { SideNavegationComponent } from '../../side-navegation/side-navegation.component';
import { SideMenuComponent } from '../../side-menu/side-menu.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, SideBarDashboardComponent, SideNavegationComponent, SideMenuComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

}
