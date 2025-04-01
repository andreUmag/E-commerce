import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path:'auth',
        loadChildren: () => import('./auth/features/auth.routes').then(m => m.default),
    }
];
