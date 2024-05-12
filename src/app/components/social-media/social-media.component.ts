import { Component } from '@angular/core';
import { UserServiceService } from '../../services/userService/user-service.service';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  providers: [UserServiceService],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  constructor(
    private userService: UserServiceService,
  ){}

  loginGoogle() {
    this.userService.loginGoogle().subscribe((value) => {
      sessionStorage.setItem("oauth-token", value.toString());
    });
  }
}
