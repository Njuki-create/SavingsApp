import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountdetailsService } from '../services/accountdetails.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent implements OnInit {
  data: any = [];
  constructor(private router: Router, private service: AccountdetailsService) {}

  ngOnInit(): void {
    this.service.getData().subscribe(Data => {
      this.data = Data;
      console.warn(Data);
    })
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

   onContinue() {
     this.router.navigate(['/personal-details']);
   }


}
