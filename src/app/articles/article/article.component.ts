import { Component } from '@angular/core';
import { ArticleService } from '../articles.service';

@Component({
  selector: 'app-article',
  standalone: true,
  providers: [ArticleService],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {}
