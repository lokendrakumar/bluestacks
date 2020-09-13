import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'Campaignfilter'})
export class CampaignfilterPipe implements PipeTransform {
  transform(campaign: any, filter ) {
    let filteredCampaign: any = [];
    campaign.forEach(item => {
      let days = moment(item.createdOn).diff(moment(), 'days')
      item['date']= moment(item.createdOn).format("LL");
      if( filter == 'upcoming' &&  days > 0) {
        item['dayDiff']=days;
        filteredCampaign.push(item);
      } else if(filter == 'past' &&  days < 0) {
        item['dayDiff']=-1*days;
        filteredCampaign.push(item);
      } else if( filter == 'past' &&  days < 0){
        filteredCampaign.push(item);
      }
    });
    return filteredCampaign
  }
}
