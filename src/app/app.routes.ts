import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';

export const routes: Routes = [
  {
    path: '',
    component: Navbar,
    children: [
      {
        path: '',
        loadComponent: () => import('./article/article').then((m) => m.Article),
        pathMatch: 'full',
      },
      { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login) },
      {
        path: 'register',
        loadComponent: () => import('./register/register').then((m) => m.Register),
      },
    ],
  },
];
