import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
const childRouterConfig: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(childRouterConfig),
  ]
})
export class DashboardModule { }
