import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SignupResponse } from '../interfaces/signup-response';

@Injectable({
  providedIn: 'root'
})
export class AccountdetailsService {

  // behavior subject is used to put data from account details component.
  // observable is used to read the data from the behavior subject
  private loginFormDetails = new BehaviorSubject([]);
  loginFormObservable = this.loginFormDetails.asObservable();

  constructor(private http: HttpClient) { }

  postDatas(data: any): Observable<SignupResponse> {
    // const url = 'https://c270d09e-a589-4e04-8171-d2e9aaa46809.mock.pstmn.io';
    const url = 'http://10.20.33.73:8080/user/signup';
    return this.http.post<SignupResponse>(url, data);

  }

  // updateFormDetails updates the behavior subject with details from the accountdetails form
  updateFormDetails(formDetails: any) {
    this.loginFormDetails.next(formDetails);
  }
}
