import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ArticleType } from './types/article';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Service {
  private httpClient = inject(HttpClient);

  list() {
    return this.httpClient.get<{ articlesCount: number; articles: ArticleType[] }>(
      `${environment.API_URL}/articles`,
    );
  }
}
