import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Service } from './service';
import { Store } from '@ngrx/store';
import { isLoggedInSelector } from '../../context/auth';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-article',
  imports: [DatePipe],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class ArticleComponent {
  private readonly service = inject(Service);
  private readonly store = inject(Store);
  protected readonly isLoggedIn = this.store.selectSignal(isLoggedInSelector);
  protected readonly activeFeed = signal<'global' | 'personal'>('global');
  protected readonly tagsResponse = toSignal(this.service.tags(), { initialValue: { tags: [] } });
  private readonly response$ = toObservable(this.activeFeed).pipe(
    switchMap((feed) => (feed === 'global' ? this.service.list() : this.service.feeds())),
  );
  protected readonly articlesResponse = toSignal(this.response$, {
    initialValue: {
      articles: [],
      articlesCount: 0,
    },
  });

  handleFeedClick(feedType: ReturnType<typeof this.activeFeed>): void {
    this.activeFeed.set(feedType);
  }
}
