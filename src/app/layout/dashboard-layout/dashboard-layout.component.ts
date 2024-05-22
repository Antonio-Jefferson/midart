import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarDashboardComponent } from '../../components/sidebar-dashboard/side-bar-dashboard.component';
import { SideNavegationComponent } from '../../components/side-navegation/side-navegation.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { MenuMobileComponent } from '../../components/menu-mobile/menu-mobile.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [RouterOutlet, SideBarDashboardComponent, SideNavegationComponent, SideMenuComponent, MenuMobileComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

}
