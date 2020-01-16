import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: '',
  //   component: ContentLayoutComponent,
  //   canActivate: [NoAuthGuard], // Should be replaced with actual auth guard
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () =>
  //         import('./modules/home/home.module').then(m => m.HomeModule)
  //     },
  //     {
  //       path: 'my-requests',
  //       loadChildren: () => import('./modules/my-requests/my-requests.module').then(m => m.MyRequestsModule)
  //     },
  //     {
  //       path: 'new-request',
  //       loadChildren: () => import('./modules/new-request/new-request.module').then(m => m.NewRequestModule)
  //     },
  //     {
  //       path: 'edit-request',
  //       loadChildren: () => import('./modules/new-request/new-request.module').then(m => m.NewRequestModule)
  //     },
  //     {
  //       path: 'all-requests',
  //       loadChildren: () => import('./modules/all-requests/all-requests.module').then(m => m.AllRequestsModule)
  //     },
  //     {
  //       path: 'app-settings',
  //       loadChildren: () => import('./modules/app-settings/app-settings.module').then(m => m.AppSettingsModule)
  //     },
  //     {
  //       path: 'organizations',
  //       loadChildren: () => import('./modules/organizations/organizations.module').then(m => OrganizationsModule)
  //     }
  //   ]
  // }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
