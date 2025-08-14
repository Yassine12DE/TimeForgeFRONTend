import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UsersService } from 'src/app/services/users.service';
import { DashboardStats } from 'src/app/models/Dashboard-stats';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users:User[]=[];
  searchtext:any;
  stats: DashboardStats | null = null;
  constructor(private userService:UsersService,private dashboardService: DashboardService,private router:Router){}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe( (data: User[]) => {
      this.users = data;  
     });
     this.dashboardService.getDashboardStats().subscribe((data: DashboardStats) => {
      this.stats = data;
    });
     
     

}
redirectToReward(id:number){
this.router.navigate(['/reward-history/',id])
}

redirectToProductivity(id: number): void {
  this.router.navigate(['/user-productivity', id]);
}
}
