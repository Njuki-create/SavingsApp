import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SignupResponse } from '../interfaces/signup-response';

@Injectable({
  providedIn: 'root'
})
export class PersonalDetailsService {

  constructor(private http: HttpClient) { }

  postData(data: any): Observable<SignupResponse> {
    const url = 'https://c270d09e-a589-4e04-8171-d2e9aaa46809.mock.pstmn.io';
    // const url = 'http://10.20.33.97:8080/user/signup';
    return this.http.post<SignupResponse>(url, data);
  }
}
