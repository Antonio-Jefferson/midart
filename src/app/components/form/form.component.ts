import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink, SocialMediaComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

}
