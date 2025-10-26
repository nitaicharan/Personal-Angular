import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Author } from '../article/types/author';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private readonly httpClient = inject(HttpClient);

  login(email: string, password: string) {
    return this.httpClient.post<{ user: Author }>(`${environment.API_URL}/users/login`, {
      user: { email, password },
    });
  }
}
