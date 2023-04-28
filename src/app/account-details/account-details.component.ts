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
    this.router.navigate(['/personal-details']);
  }
  }


