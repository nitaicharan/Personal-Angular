import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, map, Observable, of } from 'rxjs';
import { User } from '../../types/User';
import { Article } from '../../types/Article';
import { UserService } from '../../services/user.service';
import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  standalone: true,
  imports: [CommonModule],
  providers: [UserService, ArticleService],
})
export class ProfileComponent implements OnInit {
  profile$: Observable<User> = of();
  articleData$: Observable<{ articles: Article[]; articlesCount: number }> =
    from([]);
  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService,
  ) {}

  ngOnInit(): void {
    const { username }: Record<string, string> = this.route.snapshot.params;
    this.profile$ = this.userService.get(username).pipe(map((i) => i.profile));
    this.articleData$ = this.articleService.list(username);
  }

  generatePageList(items: number) {
    // const offset = 0;
    const limit = 10;

    const length = Math.ceil(items / limit);
    return Array.from({ length }, (_, i) => i + 1);
  }
}
