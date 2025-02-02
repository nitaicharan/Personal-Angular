import { Injectable } from '@angular/core';
import { ListBaseService } from '../base/list-base.service';

@Injectable({
  providedIn: 'root',
})
export class ListArticleService extends ListBaseService {
  override get endpoint(): string {
    return '/articles';
  }
}
