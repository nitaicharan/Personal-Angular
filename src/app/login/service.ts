import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private httpClient = inject(HttpClient);

  login(email: string, password: string) {
    return this.httpClient.post(`${environment.API_URL}/users/login`, {
      user: { email, password },
    });
  }
}
