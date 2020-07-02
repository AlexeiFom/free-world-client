import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexLayoutComponent } from './shared/components/layouts/index-layout/index-layout.component';
import { IndexComponent } from './shared/components/index/index.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { ForgotPasswordComponent } from './shared/components/forgot-password/forgot-password.component';
import { ConfirmPasswordComponent } from './shared/components/confirm-password/confirm-password.component';


const routes: Routes = [
  {
    path: '',
    component: IndexLayoutComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: 'confirm-password',
        component: ConfirmPasswordComponent
      }
    ]
  },
  {
    path: 'user',
    canActivate:[AuthGuardService],
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
