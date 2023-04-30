import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sendmoney } from '../interfaces/sendmoney';

@Injectable({
  providedIn: 'root'
})
export class SendmoneyService {

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<Sendmoney> {

    const url = 'http://10.20.33.73:8080/api/savings/transactions';
    return this.http.post<Sendmoney>(url, data);
  }
}
