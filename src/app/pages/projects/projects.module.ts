import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectsPage } from './projects.page';

import { MatSelectModule } from '@angular/material/select';

import { MatFormFieldModule } from '@angular/material/form-field';

const routes: Routes = [
  {
    path: '',
    component: ProjectsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectsPage]
})
export class ProjectsPageModule { }
