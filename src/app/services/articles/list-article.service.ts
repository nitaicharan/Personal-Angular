import { ListBaseService } from '../base/list-base.service';

export class ListArticleService extends ListBaseService {
  override get endpoint(): string {
    return '/articles';
  }
}
