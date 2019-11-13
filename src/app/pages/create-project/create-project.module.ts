import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CreateProjectPage } from './create-project.page';

import { MatStepperModule } from '@angular/material/stepper';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';

import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: CreateProjectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    IonicModule,
    MatButtonModule,
    MatStepperModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateProjectPage]
})
export class CreateProjectPageModule { }
