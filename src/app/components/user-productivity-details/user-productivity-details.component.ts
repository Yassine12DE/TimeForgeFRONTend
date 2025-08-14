import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProductivityService } from 'src/app/services/user-productivity.service';
import { UserProductivity } from 'src/app/models/UserProductivity';
import { ChartConfiguration, ChartOptions } from 'chart.js';


@Component({
  selector: 'app-user-productivity-details',
  templateUrl: './user-productivity-details.component.html',
  styleUrls: ['./user-productivity-details.component.css']
})
export class UserProductivityDetailsComponent implements OnInit{
  userId!: number;
  userData!: UserProductivity;
  colorMode = 'lightMode';

  constructor(
    private route: ActivatedRoute,
    private productivityService: UserProductivityService
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));
    this.getProductivityById(this.userId);
  }

  
    getProductivityById(id: number): void {
      console.log("Fetching productivity for user ID:", id);
      this.productivityService.getProductivityByUserId(id).subscribe(
        data => {
          console.log("Data received from API:", data);
          this.userData = data;
          // PIE DATA
          const remaining = data.totalGoals - data.completedGoals;
          this.pieChartData = [data.completedGoals, remaining];

// BAR DATA (pourcentage)
this.barChartData = [data.goalCompletionPercentage];
        },
        error => {
          console.error("Error while fetching productivity:", error);
        }
      );
    }

    toggleMode(){
      if(this.colorMode === 'lightMode'){
        this.colorMode = 'darkMode';
      }else {
        this.colorMode = 'lightMode';
      }
    }
    

    
    public pieChartData: number[] = [];
public pieChartLabels: string[] = ['Completed Goals', 'Remaining Goals'];

public pieChartOptions: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    }
  }
};

public barChartData: number[] = [];
public barChartOptions: ChartOptions<'bar'> = {
  responsive: true,
  indexAxis: 'y',
  scales: {
    x: { min: 0, max: 100 }
  }
};
  

}