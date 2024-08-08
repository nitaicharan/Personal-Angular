import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comment } from '../types/Comment';

@Injectable()
export class CommentService {
  constructor(private readonly http: HttpClient) {}

  list(slug: string) {
    const params = new HttpParams();
    // username.length && params.appendAll({ username });

    return this.http.get<{ comments: Comment[] }>(
      `https://api.realworld.io/api/articles/${slug}/comments`,
      { params },
    );
  }
}
