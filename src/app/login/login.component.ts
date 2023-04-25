import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router){
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

  };
  loginObj = {
    phoneNumber: '',
    email: '',
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

    };
  }

  onLogin() {
    debugger
    const isUserExist=this.signupUsers.find(m => m.phonenumber == this.loginObj.phoneNumber && m.pin == this.loginObj.email);
    if(isUserExist != undefined) {
      alert('User Logged in Successfully');
    }
    // this.router.navigate(['/'])
    else {
      alert('Wrong Credentials');
    }
  }
}
