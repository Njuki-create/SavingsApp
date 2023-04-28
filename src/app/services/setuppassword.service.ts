import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passwordresponse } from '../interfaces/passwordresponse';

@Injectable({
  providedIn: 'root'
})
export class SetuppasswordService {

  constructor(private http: HttpClient) { }

  // Method to submit data. takes parameter data which is defined in the component
  postData(data: any): Observable<Passwordresponse> {
    const url = 'http://10.20.33.73:8080/user/change-pin';
    return this.http.post<Passwordresponse>(url, data);
  }
}
