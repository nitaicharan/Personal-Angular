import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class ListBaseService {
  constructor(private readonly httpClient: HttpClient) {}

  abstract get endpoint(): string;

  execute() {
    return this.httpClient.get<any[]>(environment.BASE_URL + this.endpoint);
  }
}
