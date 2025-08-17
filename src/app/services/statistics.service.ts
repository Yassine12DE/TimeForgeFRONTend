import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  private apiUrl = 'http://localhost:8089/statistics';
  constructor(private http: HttpClient) {}

  getUserStatistics(userId: string) {
    return this.http.get<any>(`${this.apiUrl}/user/${userId}`);
  }
}
