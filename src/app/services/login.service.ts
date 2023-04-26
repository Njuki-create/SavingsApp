import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  postData(data: any): Observable<LoginResponse> {

    const url = 'http://10.20.33.73:8080/user/login'
    return this.http.post<LoginResponse>(url, data);
  }
}
