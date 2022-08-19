import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page404Component } from './page404/page404.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    Page404Component
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class Page404Module { }
