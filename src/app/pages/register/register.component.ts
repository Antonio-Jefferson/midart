import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CustomButtonComponent } from '../../components/custom-button/custom-button.component';
import { SocialMediaComponent } from '../../components/social-media/social-media.component';
import { UserServiceService } from '../../services/userService/user-service.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { WelcomeComponent } from '../../components/welcome/welcome.component';
import { UserRegister, UserRegisterData} from '../../../@types/user-types';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    CustomButtonComponent,
    WelcomeComponent,
    SocialMediaComponent,
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  providers: [UserServiceService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    registerForm!: FormGroup<UserRegister>;

    constructor(
      private userService: UserServiceService,
      private toastrService: ToastrService,
      private router: Router
    ){
      this.registerForm = new FormGroup({
        firstname: new FormControl('', Validators.required),
        lastname: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)])
      });
    }

    registerUser() {
      const registerData: UserRegisterData = {
        firstname: this.registerForm.value.firstname || null,
        lastname: this.registerForm.value.lastname || null,
        email: this.registerForm.value.email || null,
        password: this.registerForm.value.password || null
      };

        this.userService.saveUser(registerData).subscribe({
          next: () => {
            this.toastrService.success("Registro feito com sucesso!");
            this.registerForm.reset();
            this.router.navigate(['/']);
          },
          error: () => this.toastrService.error("Erro ao registrar o usuário")
        })
    }
}
