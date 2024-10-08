import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../types/Article';

@Injectable()
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  list(username: string = '') {
    const params = new HttpParams();
    username.length && params.appendAll({ username });

    return this.http.get<{ articles: Article[]; articlesCount: number }>(
      'https://api.realworld.io/api/articles',
      { params },
    );
  }

  get(slug: string) {
    return this.http.get<{ article: Article }>(
      `https://api.realworld.io/api/articles/${slug}`,
    );
  }
}
