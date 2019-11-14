import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'create-project', loadChildren: () => import('./pages/create-project/create-project.module').then(m => m.CreateProjectPageModule)},
  { path: 'keystones', loadChildren: () => import('./pages/keystones/keystones.module').then(m => m.KeystonesPageModule)},
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule) },
  { path: 'forget-pass', loadChildren: () => import('./pages/forget-pass/forget-pass.module').then(m => m.ForgetPassPageModule) },
  { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule) },
  { path: 'select-rol', loadChildren: () => import('./pages/select-rol/select-rol.module').then(m => m.SelectRolPageModule) },  { path: 'project-detail', loadChildren: './pages/project-detail/project-detail.module#ProjectDetailPageModule' },
  { path: 'fragment-detail', loadChildren: './pages/fragment-detail/fragment-detail.module#FragmentDetailPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
