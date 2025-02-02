import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class ListBaseService {
  constructor(private readonly httpClient: HttpClient) {}

  abstract get endpoint(): string;

  execute() {
    return this.httpClient.get<any[]>(environment.BASE_URL + this.endpoint);
    // return of<any>({
    //   articles: [
    //     {
    //       slug: 'how-to-train-your-dragon',
    //       title: 'How to build webapps that scale',
    //       description: 'This is a description post.',
    //       tagList: ['realworld', 'implementations'],
    //       createdAt: '2016-02-18T03:22:56.637Z',
    //       updatedAt: '2016-02-18T03:48:35.824Z',
    //       favorited: false,
    //       favoritesCount: 1,
    //       author: {
    //         username: 'jake',
    //         bio: 'I work at statefarm',
    //         image: 'http://i.imgur.com/Qr71crq.jpg',
    //         following: false,
    //       },
    //     },
    //     {
    //       slug: 'how-to-train-your-dragon-2',
    //       title:
    //         "The song you won't ever stop singing. No matter how hard you try",
    //       description: 'This is another post description.',
    //       tagList: ['dragons', 'training'],
    //       createdAt: '2016-06-18T03:22:56.637Z',
    //       updatedAt: '2016-06-18T03:48:35.824Z',
    //       favorited: false,
    //       favoritesCount: 23,
    //       author: {
    //         username: 'jake',
    //         bio: 'I work at statefarm',
    //         image: 'http://i.imgur.com/N4VcUeJ.jpg',
    //         following: false,
    //       },
    //     },
    //   ],
    //   articlesCount: 2,
    // });
  }
}
