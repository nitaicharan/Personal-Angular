import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../articles.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Article } from '../types/Article';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  standalone: true,
  providers: [ArticleService],
  imports: [CommonModule],
})
export class ArticleComponent implements OnInit {
  article$: Observable<Article> = of();

  constructor(
    private readonly service: ArticleService,
    private readonly router: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const { slug } = this.router.snapshot.params;
    this.article$ = this.service.get(slug).pipe(map((i) => i.article));
  }
}
