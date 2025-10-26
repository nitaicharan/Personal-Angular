import { Component, inject, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { first } from 'rxjs';
import { Service } from './service';
import { Store } from '@ngrx/store';
import { isLoggedInSelector } from '../../context/auth';
import { Article } from './types/article';

@Component({
  selector: 'app-article',
  imports: [DatePipe],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class ArticleComponent implements OnInit {
  private readonly service = inject(Service);
  private readonly store = inject(Store);
  protected readonly isLoggedIn = this.store.selectSignal(isLoggedInSelector);
  protected readonly data = signal<Article[]>([]);
  protected readonly error = signal<string | null>(null);
  protected readonly activeFeed = signal<'global' | 'personal'>('global');

  ngOnInit(): void {
    this.loadArticles(this.service.list());
  }

  handleFeedClick(feedType: ReturnType<typeof this.activeFeed>): void {
    this.activeFeed.set(feedType);
    const source$ = feedType === 'global' ? this.service.list() : this.service.feeds();
    this.loadArticles(source$);
  }

  private loadArticles(source$: ReturnType<Service['list'] | Service['feeds']>): void {
    source$.pipe(first()).subscribe({
      next: ({ articles }) => {
        this.data.set(articles);
        this.error.set(null);
      },
      error: (err) => {
        console.error(err);
        this.data.set([]);
        this.error.set('Failed to load articles');
      },
    });
  }
}
