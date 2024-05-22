import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-navegation',
  standalone: true,
  imports: [ MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './side-navegation.component.html',
  styleUrl: './side-navegation.component.scss'
})
export class SideNavegationComponent {

}
