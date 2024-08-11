import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp } from '../types/SignUp';
import { SignIn } from '../types/SignIn';

@Injectable()
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  signIn(data: SignIn) {
    return this.http.post<{}>(`https://api.realworld.io/api/users/login`, {
      body: {
        user: data,
      },
    });
  }

  signUp(data: SignUp) {
    return this.http.post<{}>(`https://api.realworld.io/api/users`, {
      body: {
        user: data,
      },
    });
  }
}
