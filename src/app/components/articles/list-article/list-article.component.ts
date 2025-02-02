import { Component, OnInit, signal, Signal } from '@angular/core';
import { PreviewComponent } from './preview/preview.component';
import { ListArticleService } from '../../../services/articles/list-article.service';
import { shareReplay } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-list-article',
  providers: [ListArticleService],
  imports: [PreviewComponent, CommonModule],
  templateUrl: './list-article.component.html',
  styleUrl: './list-article.component.scss',
})
export class ListArticleComponent {
  articles: Signal<any | undefined>;

  constructor(private readonly service: ListArticleService) {
    this.articles = toSignal(this.service.execute().pipe(shareReplay()));
  }

  hasLoaded() {
    return this.articles();
  }
}
