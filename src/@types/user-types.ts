import { FormControl } from "@angular/forms";

export interface UserRegister {
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
}

export interface LoginData {
  email: string;
  password: string;
}
