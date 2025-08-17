import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartOptions } from 'chart.js';
import { StatisticsService } from 'src/app/services/statistics.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  userId: any;
  stats: any;

  // Chart data
  // Charts
  weeklyTaskChartData!: ChartData<'line'>;
  rewardHistoryChartData!: ChartData<'bar'>;
  chartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
  };

  constructor(private statisticsService: StatisticsService) {}

  ngOnInit(): void {
    // Get userId from localStorage
    this.userId = localStorage.getItem('idUser');
    if (this.userId) {
      this.statisticsService
        .getUserStatistics(this.userId)
        .subscribe((data) => {
          this.stats = data;
          this.loadCharts();
        });
    }
  }

  loadCharts() {
    // Weekly Task Completion Line Chart
    this.weeklyTaskChartData = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          data: this.stats.weeklyTaskCompletion,
          label: 'Tasks Completed',
          fill: true,
          borderColor: '#0d6efd',
          backgroundColor: 'rgba(13,110,253,0.2)',
          tension: 0.3,
        },
      ],
    };

    // Reward History Bar Chart
    this.rewardHistoryChartData = {
      labels: this.stats.rewardHistory.map(
        (_: number, idx: number) => `#${idx + 1}`
      ),
      datasets: [
        {
          data: this.stats.rewardHistory,
          label: 'Rewards',
          backgroundColor: '#198754',
        },
      ],
    };
  }
}
