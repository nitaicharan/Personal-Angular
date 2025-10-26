import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { ArticlesService } from './services/articles';
import { shareReplay } from 'rxjs';

@Component({
  selector: 'app-article',
  imports: [DatePipe],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article {
  private service = inject(ArticlesService);
  protected data = toSignal(this.service.list().pipe(shareReplay()));
}
