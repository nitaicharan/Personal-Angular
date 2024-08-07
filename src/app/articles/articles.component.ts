import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { ArticleService } from './articles.service';
import { CommonModule } from '@angular/common';
import { Article } from './types/Article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss',
  standalone: true,
  imports: [CommonModule],
  providers: [ArticleService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticlesComponent implements OnInit {
  $articles: Observable<Article[]> = from([]);

  constructor(private readonly service: ArticleService) {}

  ngOnInit(): void {
    this.$articles = this.service.list().pipe(map((i) => i.articles));
  }

  trackByFn(_: number, item: Article) {
    return item.slug;
  }
}
