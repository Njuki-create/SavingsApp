import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SetuppasswordService } from '../services/setuppassword.service';
import { PersonalDetailsService } from '../services/personal-details.service';

@Component({
  selector: 'app-setuppassword',
  templateUrl: './setuppassword.component.html',
  styleUrls: ['./setuppassword.component.scss']
})
export class SetuppasswordComponent {
  constructor (private router: Router, private passwordservice: SetuppasswordService, private personaldetails: PersonalDetailsService) {

    // this.personaldetails.personalDetailsObservable.subscribe(item => this.pinObj.previousFormDetails = item)
   }

  pinObj = {
    phoneNumber: '',
    confirmPhoneNumber: '',
    newPin: '',
    confirmPin: '',
    previousFormDetails: {},
  }

  showError = false;

  onContinue() {

    let postData = {
      phoneNumber: this.pinObj.phoneNumber,
      confirmPhoneNumber: this.pinObj.confirmPhoneNumber,
      newPin: this.pinObj.newPin,
      confirmPin: this.pinObj.confirmPin,
    };

    // postData = {...postData, ...this.pinObj.previousFormDetails}

    // console.log('postData');
    // console.log(postData);

    if (this.pinObj.newPin !== this.pinObj.confirmPin) {
      this.showError = true;
      return;
    }

    this.passwordservice.postData(this.pinObj).subscribe(
      (response: any) => {
        if (response.status !== 'success') {
          alert('Invalid Details');
          return;
        }

        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error(error);
        alert('An error occurred while setting up pin. Please try again later.');
      }
    );
  }
}
