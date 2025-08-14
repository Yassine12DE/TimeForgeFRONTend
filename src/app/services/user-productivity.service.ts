import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProductivity } from '../models/UserProductivity';

@Injectable({
  providedIn: 'root'
})
export class UserProductivityService {

  constructor(private http: HttpClient) {}

  // Liste globale (si tu en as besoin ailleurs)
  getProductvityUsers(): Observable<UserProductivity[]> {
    return this.http.get<UserProductivity[]>("http://localhost:8089/dashboard/users-productivity");
  }

  // 🛠 CORRECTION ICI – méthode pour 1 seul utilisateur
  getProductivityByUserId(id: number): Observable<UserProductivity> {
    return this.http.get<UserProductivity>("http://localhost:8089/dashboard/user-productivity/" + id);
  }
}