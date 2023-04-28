import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private Loginservice: LoginService){
  }
  //creating an array to store users
  signupUsers: any[] =[];
  //creating an object to store users' signup details
  signupObj = {
    fullname: '',
    NationalIDnumber: '',
    DateofBirth: '',
    Gender: '',
    phoneNumber: '',
    email: '',
    pin: '',

  };
  loginObj = {
    phoneNumber: '',
    pin: '',
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('signupUsers');
    if(localData != null) {
      this.signupUsers=JSON.parse(localData);
    }

  }
  onSignUp() {
    this.router.navigate(['/account-details']);
    //pushing the signupUsers to the object Array
    this.signupUsers.push(this.signupObj);
    //storing the array in the localStorage and converting the data into string
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
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
    this.Loginservice.postData(this.loginObj).subscribe(
      (response: any) => {
        if (response.status!=='success') {
          alert('Invalid Details');
          return;
        }

        // const { email, phoneNumber } = response;
        // if (email !== this.loginObj.email || phoneNumber !== this.loginObj.phoneNumber) {
        //   alert('Invalid Login');
        //   return;
        // }

        this.router.navigate(['/dashboard']);
      },
      (error: any) => {
        console.error(error);
        alert('An error occurred while logging in. Please try again later.');
      }
    );
  }

}
