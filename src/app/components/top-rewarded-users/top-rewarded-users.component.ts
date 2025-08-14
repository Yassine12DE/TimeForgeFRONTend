import { Component, OnInit } from '@angular/core';
import { RewardService } from 'src/app/services/reward.service';
import { ChartConfiguration } from 'chart.js';
import { TopRewardedUser } from 'src/app/models/TopRewardedUser';

@Component({
  selector: 'app-top-rewarded-users',
  templateUrl: './top-rewarded-users.component.html',
  styleUrls: ['./top-rewarded-users.component.css']
})
export class TopRewardedUsersComponent implements OnInit{
  topRewardedUsers: TopRewardedUser[] = []; 
  
  constructor (private rewardService:RewardService){}
  ngOnInit(): void {
    this.rewardService.getTopRewardedUsers().subscribe((data) => {
      console.log(data);
      this.topRewardedUsers = data;
    });

  }

}
