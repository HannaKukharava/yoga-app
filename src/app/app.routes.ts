import { Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/+core/containers/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./modules/+core/pages/home-page/home-page.component'),
      },
    ],
  },
];
