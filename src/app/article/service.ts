import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Article } from './types/article';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private httpClient = inject(HttpClient);

  list() {
    return this.httpClient.get<{ articlesCount: number; articles: Article[] }>(
      `${environment.API_URL}/articles`,
    );
  }

  feeds() {
    return this.httpClient.get<{ articlesCount: number; articles: Article[] }>(
      `${environment.API_URL}/feed`,
    );
  }
}
