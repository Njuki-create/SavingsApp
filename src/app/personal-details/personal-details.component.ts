import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonalDetailsService } from '../services/personal-details.service';
import { AccountdetailsService } from '../services/accountdetails.service';
import { SignupResponse } from '../interfaces/signup-response';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {

  fullName: string;
  nationalId: string;
  dob: string;
  gender: string;
  phoneNumber: string;
  confirmPhoneNumber: string;
  email: string;
  pin: string;
  confirmPin: string;
  previousFormDetails: {};

  constructor(private router: Router,
    private service: PersonalDetailsService,
    private accountsDetails: AccountdetailsService,
    private Sharedservice: SharedService) {

      this.accountsDetails.loginFormObservable.subscribe(item =>
        this.previousFormDetails = item
      )

    }

  onContinue() {

      // creating an object to store user registration data
    let postData = {
      fullName: this.fullName,
      nationalId: this.nationalId,
      dob: this.dob,
      gender: this.gender,
      phoneNumber: this.phoneNumber,
      confirmPhoneNumber: this.confirmPhoneNumber,
      email: this.email,
      pin: this.pin,
      confirmPin: this.confirmPin,
    };

    postData = {...postData, ...this.previousFormDetails}

    console.log('postData');
    console.log(postData);


    this.Sharedservice.changeEmail(this.email);
    this.service.postData(postData).subscribe((response: SignupResponse) => {
      console.log(response.message); //display response message from server to the user

      // create a JSON object from the users Information
      const userJson = {
        fullname: response.data.fullName,
        nationalId: response.data.nationalId,
        dob: response.data.dob,
        gender: response.data.gender,
        phoneNumber: response.data.phoneNumber,
        confirmPhoneNumber: response.data.confirmPhoneNumber,
        pin: response.data.pin,
        confirmPin: response.data.confirmPin,
      };

      console.log(userJson); // display the JSON object to the console

    });

    this.router.navigate(['/email-verification']);

  }
}
