import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectDetailPage } from './project-detail.page';

import {MatListModule} from '@angular/material/list';
import { BuyModalModule } from 'src/app/components/buy-modal/buy-modal.module';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    BuyModalModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectDetailPage]
})
export class ProjectDetailPageModule {}
