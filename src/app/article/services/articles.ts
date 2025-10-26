import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ArticleType } from '../types/article';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  private httpClient = inject(HttpClient);

  list() {
    return this.httpClient.get<{ articlesCount: number; articles: ArticleType[] }>(
      environment.API_URL + '/articles',
    );
  }
}
