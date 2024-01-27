export interface User {
  username: string;
  fname: string;
  lname: string;
  email: string;
  id: string;
}

export interface LoginParams {
  username: string;
  password: string;
}

export interface RegisterParams {
  username: string;
  password1: string;
  password2: string;
  email: string;
}
