import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AccountdetailsService {

  constructor(private http: HttpClient) { }

  getData() {
    let url = 'http://10.20.33.97:8080/user/signup';
    return this.http.get(url);

  }
}
