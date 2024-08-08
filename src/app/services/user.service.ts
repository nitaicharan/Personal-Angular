import { HttpClient } from '@angular/common/http';
import { User } from '../articles/types/User';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpClient) {}

  get(username: string) {
    return this.http.get<{ profile: User }>(
      `https://api.realworld.io/api/profiles/${username}`,
    );
  }
}
