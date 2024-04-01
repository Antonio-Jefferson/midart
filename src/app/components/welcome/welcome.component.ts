import { Component, Input } from '@angular/core';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [SocialMediaComponent, CustomButtonComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  @Input() routerLink: String = "";
  @Input() textButton: String = "";

}
