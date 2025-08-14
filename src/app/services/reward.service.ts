import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RewardHistoryResponse } from '../models/RewardHistoryResponse';
import { Observable } from 'rxjs';
import { TopRewardedUser } from '../models/TopRewardedUser';




@Injectable({
  providedIn: 'root'
})


export class RewardService {


  constructor(private http:HttpClient) { }

  getRewardHistory(id:Number):Observable<RewardHistoryResponse[]>
  {
    return this.http.get<RewardHistoryResponse[]>("http://localhost:8089/rewards/history/"+id)
  }

  getTopRewardedUsers(): Observable<TopRewardedUser[]> {
    return this.http.get<TopRewardedUser[]>('http://localhost:8089/rewards/top-rewarded-users');
  }
  
  
}



