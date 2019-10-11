import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module')
    .then(m=>m.PagesModule)
  }, {
    path: 'auth',
    component: NbAuthComponent,
    children:[
      {
        path: '',
        component: NbLoginComponent,
      }, {
        path: 'login',
        component: NbLoginComponent
      }, {
        path: 'register',
        component: NbRegisterComponent
      }
    ]
  },
  { path: '',
    redirectTo: 'pages',
    pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
