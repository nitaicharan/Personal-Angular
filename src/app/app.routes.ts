import { Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { LayoutsModule } from './layouts/layouts.module';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        loadChildren: () => LayoutsModule,
      },
    ],
  },
];
