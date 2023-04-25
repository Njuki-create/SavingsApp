import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  postData(data: any) {

    const url = 'http://10.20.33.73:8080/user/login'
    return this.http.get(url, data);
  }
}
