import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private readonly httpClient = inject(HttpClient);

  register(username: string, email: string, password: string) {
    return this.httpClient.post(`${environment.API_URL}/users`, {
      user: { username, email, password },
    });
  }
}
