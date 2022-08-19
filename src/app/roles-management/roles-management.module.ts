import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesManagementComponent } from './roles-management/roles-management.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', component: RolesManagementComponent },
];

@NgModule({
  declarations: [
    RolesManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class RolesManagementModule { }
