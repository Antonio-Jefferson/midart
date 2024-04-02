import { FormControl } from "@angular/forms";

export interface UserRegister {
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
}

export interface LoginFormControl {
  email: FormControl;
  password: FormControl;
}

export interface UserRegisterData {
  firstname: string | null;
  lastname: string | null;
  email: string | null ;
  password: string| null;
}

export interface LoginData {
  email: string;
  password: string;
}
