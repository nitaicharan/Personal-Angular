import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './types/Article';

@Injectable()
export class ArticleService {
  constructor(private readonly http: HttpClient) {}

  list() {
    return this.http.get<{ articles: Article[] }>(
      'https://api.realworld.io/api/articles',
    );
  }
}
