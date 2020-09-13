import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './campaign/campaign.component';
import { CampaignfilterPipe } from './campaign/campaignfilter.pipe';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { CampaignService } from "src/app/dashboard/campaign/campaign.service";
import { HttpClientModule } from '@angular/common/http';

const childRouterConfig: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [DashboardComponent, CampaignfilterPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(childRouterConfig),
    HttpClientModule
  ], providers: [CampaignService]
})
export class DashboardModule { }
