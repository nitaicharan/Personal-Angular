import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Article } from '../../types/Article';
import { ArticleService } from '../../services/article.service';

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
  data$: Observable<{ articles: Article[]; articlesCount: number }> = from([]);

  constructor(private readonly service: ArticleService) {}

  ngOnInit(): void {
    this.data$ = this.service.list();
  }

  generatePageList(items: number) {
    // const offset = 0;
    const limit = 10;

    const length = Math.ceil(items / limit);
    return Array.from({ length }, (_, i) => i + 1);
  }
}
