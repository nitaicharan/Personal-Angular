import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { shareReplay } from 'rxjs';
import { Service } from './service';

@Component({
  selector: 'app-article',
  imports: [DatePipe],
  templateUrl: './article.html',
  styleUrl: './article.scss',
})
export class Article {
  private readonly service = inject(Service);
  protected data = toSignal(this.service.list().pipe(shareReplay()));
}
