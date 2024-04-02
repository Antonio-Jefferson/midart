import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginData, LoginFormControl } from '../../../@types/user-types';
import { UserServiceService } from '../../services/userService/user-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterLink, SocialMediaComponent, ReactiveFormsModule],
  providers: [UserServiceService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  loginForm!: FormGroup<LoginFormControl>

  constructor(
      private userService: UserServiceService,
      private toastrService: ToastrService,
      private router: Router
  ){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    }) 
  }

  login(){
    const loginData: LoginData = {
      email: this.loginForm.value.email || null,
      password: this.loginForm.value.password || null
    } 
    this.userService.login(loginData).subscribe({
      next: () => {
        this.toastrService.success("Login realizado com sucesso!");
        this.loginForm.reset();
        this.router.navigate(['dashboard/home']);
        
      },
      error: () => this.toastrService.error("Erro ao fazer login")
    })
  }
}
