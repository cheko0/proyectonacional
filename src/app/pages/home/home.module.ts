import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'my-projects',
        children: [
          {
            path: '',
            loadChildren: () => import('../my-projects/my-projects.module').then(m => m.MyProjectsPageModule)
          }
        ]
      },
      {
        path: 'projects',
        children: [
          {
            path: '',
            loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsPageModule)
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'tabs/my-projects',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo:'tabs/my-projects',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
