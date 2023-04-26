import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountdetailsService } from '../services/accountdetails.service';
import { SignupResponse } from '../interfaces/signup-response';
import { PersonalDetailsService } from '../services/personal-details.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  data: any = [];

  fullName: string;
  idNumber: string;
  dateOfBirth: string;
  gender: string;

  constructor(private router: Router,
    private service: AccountdetailsService,
    private accountDetailsService: AccountdetailsService
    ) {}

  ngOnInit(): void {

  }

  onContinue() {
    const postData = {
      fullName: this.fullName,
      idNumber: this.idNumber,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
    };

    // updates the behavior subject with details from the accountDetails component.
    this.accountDetailsService.updateFormDetails(postData);

    // this.service.postDatas(postData).subscribe((response: SignupResponse) => {
    //   console.log(response.message); // display the response message from the server to the user

    //   // create a JSON object from the user's information
    //   const userJson = {
    //     id: response.data.id,
    //     fullName: response.data.fullName,
    //     nationalId: response.data.nationalId,
    //     dob: response.data.dob,
    //     gender: response.data.gender,
    //   };

    //   console.log(userJson); // display the JSON object to the console
    // });

    this.router.navigate(['/personal-details']);
  }
  }


