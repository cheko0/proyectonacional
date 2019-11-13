import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule) },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'forget-pass', loadChildren: './pages/forget-pass/forget-pass.module#ForgetPassPageModule' },
  { path: 'my-projects', loadChildren: () => import('./pages/my-projects/my-projects.module').then(m => m.MyProjectsPageModule) },  { path: 'projects', loadChildren: './pages/projects/projects.module#ProjectsPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'create-project', loadChildren: './pages/create-project/create-project.module#CreateProjectPageModule' },
  { path: 'keystones', loadChildren: './pages/keystones/keystones.module#KeystonesPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
