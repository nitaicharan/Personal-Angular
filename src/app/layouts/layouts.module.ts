import { NgModule } from '@angular/core';
import { LayoutsComponent } from './layouts.component';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from '../articles/articles.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ArticleComponent } from '../articles/article/article.component';
import { EditorComponent } from '../articles/editor/editor.component';
import { ProfileComponent } from '../profile/profile.component';
import { SettingComponent } from '../setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: TopNavigationComponent,
    children: [
      { path: '', component: ArticlesComponent, pathMatch: 'full' },
      { path: 'editor', loadComponent: () => EditorComponent },
      { path: 'setting', loadComponent: () => SettingComponent },
      { path: 'login', loadComponent: () => LoginComponent },
      { path: 'register', loadComponent: () => RegisterComponent },
      {
        path: 'article',
        children: [{ path: ':slug', loadComponent: () => ArticleComponent }],
      },
      {
        path: 'profile',
        children: [
          { path: ':username', loadComponent: () => ProfileComponent },
        ],
      },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  declarations: [LayoutsComponent],

  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TopNavigationComponent,
    LoginComponent,
    RegisterComponent,
    EditorComponent,
  ],
  exports: [LayoutsComponent],
})
export class LayoutsModule {}
