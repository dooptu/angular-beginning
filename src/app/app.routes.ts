import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
    },
    {
        path: 'admin',
        loadChildren: ()=> import('./modules/admin/admin.module').then(m=>m.AdminModule)
    },
    { path: '**', redirectTo: '/auth/sign-in' }, // wildcard route for unknown paths
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}