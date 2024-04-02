import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginData, UserRegister, UserRegisterData } from '../../../@types/user-types';
import { LoginReponse } from '../../../@types/login-response';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private readonly API = environment.API_URL
  constructor( private http: HttpClient) { }

  saveUser(userData: UserRegisterData){
    return this.http.post(`${this.API}/auth/register`, userData);
  }

  login(loginData: LoginData){
    return this.http.post<LoginReponse>(`${this.API}/auth/login`, loginData).pipe(tap((value) => {
      sessionStorage.setItem("auth-token", value.token)
      console.log(value.token)
    }))
  }
}
