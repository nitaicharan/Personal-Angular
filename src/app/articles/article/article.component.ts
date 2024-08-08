import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { Article } from '../../types/Article';
import { CommonModule } from '@angular/common';
import { CommentService } from '../../services/comment.service';
import { Comment } from '../../types/Comment';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
  standalone: true,
  providers: [ArticleService, CommentService],
  imports: [CommonModule],
})
export class ArticleComponent implements OnInit {
  article$: Observable<Article> = of();
  commentsData$: Observable<{ comments: Comment[] }> = of();

  constructor(
    private readonly articleService: ArticleService,
    private readonly router: ActivatedRoute,
    private readonly commentService: CommentService,
  ) {}

  ngOnInit(): void {
    const { slug } = this.router.snapshot.params;
    this.article$ = this.articleService.get(slug).pipe(map((i) => i.article));
    this.commentsData$ = this.commentService.list(slug);
  }
}
