import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormComponent } from '../../form/form.component';
import { CustomButtonComponent } from '../../custom-button/custom-button.component';
import { SocialMediaComponent } from '../../social-media/social-media.component';
import { WelcomeComponent } from '../../welcome/welcome.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormComponent, CustomButtonComponent, WelcomeComponent, SocialMediaComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
