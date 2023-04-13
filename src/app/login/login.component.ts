import { Component } from '@angular/core';
import { Router } from '@angular/router';


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
    email: '',
  };
  loginObj = {
    phonenumber: '',
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
    };
  }

  onLogin() {
    debugger
    const isUserExist=this.signupUsers.find(m => m.phonenumber == this.loginObj.phonenumber && m.pin == this.loginObj.pin);
    if(isUserExist != undefined) {
      alert('User Logged in Successfully');
    }
    else {
      alert('Wrong Credentials');
    }
  }
}
