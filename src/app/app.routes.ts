import { Routes } from '@angular/router';
import { articleRoutes } from './routes/articles-route';

export const routes: Routes = [
  { path: 'comments', children: articleRoutes },
  { path: 'articles', children: articleRoutes },
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
];
