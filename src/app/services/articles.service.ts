import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../articles/types/Article';

@Injectable()
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  list() {
    return this.http.get<{ articles: Article[]; articlesCount: number }>(
      'https://api.realworld.io/api/articles',
    );
  }

  get(slug: string) {
    return this.http.get<{ article: Article }>(
      `https://api.realworld.io/api/articles/${slug}`,
    );
  }
}
