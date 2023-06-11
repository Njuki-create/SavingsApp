import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';

interface SignUpDetails {
  fullname: string;
  NationalIDnumber: string;
  DateofBirth: string;
  Gender: string;
  phoneNumber: string;
  email: string;
  pin: string;
}

interface LoginDetails {
  phoneNumber: string;
  pin: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private loginservice: LoginService) {}

  // creating an object to store users' signup details
  signupObj: SignUpDetails = {
    fullname: '',
    NationalIDnumber: '',
    DateofBirth: '',
    Gender: '',
    phoneNumber: '',
    email: '',
    pin: '',
  };

  loginObj: LoginDetails = {
    phoneNumber: '',
    pin: '',
  };

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if (localData != null) {
      this.signupObj = JSON.parse(localData);
    }
  }

  onSignUp() {
    this.router.navigate(['/account-details']);
    // pushing the signupObj to the JSON Array
    const signupUsers = JSON.parse(localStorage.getItem('signupUsers') || '[]');
    signupUsers.push(this.signupObj);
    // storing the JSON Array in the local storage and converting data into string
    localStorage.setItem('signupUsers', JSON.stringify(signupUsers));
    this.signupObj = {
      fullname: '',
      NationalIDnumber: '',
      DateofBirth: '',
      Gender: '',
      email: '',
      phoneNumber: '',
      pin: '',
    };
  }

  onLogin() {
    this.loginservice.postData(this.loginObj).subscribe(
      ({ pin, phoneNumber, status }: { pin: string, phoneNumber: string, status: string }) => {
        if (status !== 'success') {
          alert('Invalid Details');
          return;
        }

        if (pin !== this.loginObj.pin || phoneNumber !== this.loginObj.phoneNumber) {
          alert('Invalid Login');
          return;
        }

        this.router.navigate(['/dashboard']);
      },
      error => {
        console.error(error);
        alert('An error occurred while logging in. Please try again later.');
      }
    );
  }

}
