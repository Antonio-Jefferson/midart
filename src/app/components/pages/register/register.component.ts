import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';
import { SocialMediaComponent } from '../../social-media/social-media.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, CustomButtonComponent, SocialMediaComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
