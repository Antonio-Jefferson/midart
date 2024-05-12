import { Component, Input } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SocialMediaComponent, CustomButtonComponent, RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  @Input() route: String = "";
  @Input() textButton: String = "";

}
