import { Component } from '@angular/core';
import { TopMenuComponent } from '../../top-menu/top-menu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopMenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 name: string = "Layde"
}
