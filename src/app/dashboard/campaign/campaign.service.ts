import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  public campaigns = [];
  constructor(private http: HttpClient) {
   }

   getCapmaignData() {
    this.getConfig().subscribe((data: any) =>  {
      this.campaigns = data.data;
      return data.data
    });
   }
   
   getConfig() {
     const configUrl = 'assets/campaigns.json';
    //  let headers = new HttpHeaders();
    //  headers = headers.append("Authorization", "Sq7a2VtcOeO9JXUf9JMWBxyD4zfRySHwY012eHDe");
     return this.http.get(configUrl);
   }
}
