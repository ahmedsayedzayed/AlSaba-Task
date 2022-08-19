import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ContainerComponent } from './multidimnavigation/container/container.component';
import { Page404Component } from './page404/page404/page404.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', redirectTo: '/main/dashboard', pathMatch: 'full' },
    { path: '404', component: Page404Component },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    canActivate: [AuthGuard],
    data: {permission: 'login'},
  },
  {
    path: 'main', component: ContainerComponent,
    canActivate: [AuthGuard],
    data: {permission: 'auth'},
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: { permission: 'dashboard' },
        canActivate: [AuthGuard]
      },
      {
        path: 'roles-management',
        loadChildren: () => import('./roles-management/roles-management.module').then(m => m.RolesManagementModule),
        data: { permission: 'roles-management' },
        canActivate: [AuthGuard]
      },
      
      
    ]
  },
    { path: '**', redirectTo: '/404' }, // must be last route in the array
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
