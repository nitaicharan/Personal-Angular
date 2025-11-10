import { Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';

export const routes: Routes = [
  {
    path: '',
    component: Navbar,
    children: [
      {
        path: '',
        loadComponent: () => import('./articles/articles').then((m) => m.ArticlesComponent),
        pathMatch: 'full',
      },
      { path: 'login', loadComponent: () => import('./login/login').then((m) => m.LoginComponent) },
      {
        path: 'register',
        loadComponent: () => import('./register/register').then((m) => m.RegisterComponent),
      },
    ],
  },
];
