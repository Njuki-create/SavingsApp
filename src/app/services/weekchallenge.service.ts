import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weekchallenge } from '../interfaces/weekchallenge';

@Injectable({
  providedIn: 'root'
})
export class WeekchallengeService {

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<Weekchallenge> {
    const url = 'http://10.20.33.73:8070/api/savings-plan/subscribe?userId=1';
    return this.http.post<Weekchallenge>(url, data);
  }
}
