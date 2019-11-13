import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KeystonesPage } from './keystones.page';

import { MatDividerModule } from '@angular/material/divider';

import { MatListModule } from '@angular/material/list';

import { MatCheckboxModule } from '@angular/material/checkbox';


const routes: Routes = [
  {
    path: '',
    component: KeystonesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatDividerModule,
    MatCheckboxModule,
    MatListModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KeystonesPage]
})
export class KeystonesPageModule { }
