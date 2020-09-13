import { Component, OnInit } from '@angular/core';
import { CampaignService } from "src/app/dashboard/campaign/campaign.service";
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class DashboardComponent implements OnInit {
  campaign: any;
  isShowPricingModal = false;
  campaignTab = 'upcoming';
  constructor(public campaignService : CampaignService) { }

  ngOnInit(): void {
    this.campaignService.getCapmaignData()
  }

  showPricingModal(price) {
    this.isShowPricingModal = true;
    this.campaign = price;
  }

  closePricingModal() {
    this.isShowPricingModal = false;
  }

  changeTab(tabName) {
    this.campaignTab = tabName;
    // this.campaignService.getCapmaignData()
  }
}
