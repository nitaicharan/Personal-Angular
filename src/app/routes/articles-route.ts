import { Routes } from '@angular/router';
import { ListArticleComponent } from '../components/articles/list-article/list-article.component';

export const articleRoutes: Routes = [
  {
    path: 'articles',
    pathMatch: 'full',
    loadComponent: () =>
      import('../components/articles/list-article/list-article.component').then(
        (c) => c.ListArticleComponent,
      ),
  },
  { path: '', pathMatch: 'full', component: ListArticleComponent },
];
