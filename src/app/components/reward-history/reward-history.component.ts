import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RewardHistoryResponse } from 'src/app/models/RewardHistoryResponse';
import { RewardService } from 'src/app/services/reward.service';

@Component({
  selector: 'app-reward-history',
  templateUrl: './reward-history.component.html',
  styleUrls: ['./reward-history.component.css']
})
export class RewardHistoryComponent  implements OnInit{
  rewards:RewardHistoryResponse[]=[];
  id:number=0;
  
  constructor(private route:ActivatedRoute,private rewardService:RewardService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.rewardService.getRewardHistory(this.id).subscribe((data:RewardHistoryResponse[])=>{
      this.rewards=data;
    }
    )
  }


}
