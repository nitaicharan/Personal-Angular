import { HttpClient } from '@angular/common/http';

export abstract class CreateBaseService {
  constructor(
    readonly httpClient: HttpClient,
    readonly url: string,
  ) {}

  execute() {
    return this.httpClient.get<any>(this.url);
  }
}
