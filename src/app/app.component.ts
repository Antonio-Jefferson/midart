import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavegationComponent } from './components/side-navegation/side-navegation.component';
import { SideBarDashboardComponent } from './components/sidebar-dashboard/side-bar-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavegationComponent, SideBarDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MidArt';
}
