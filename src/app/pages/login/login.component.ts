import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormComponent } from '../../components/form/form.component';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { SocialMediaComponent } from '../../components/social-media/social-media.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormComponent, CustomButtonComponent, WelcomeComponent, SocialMediaComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
