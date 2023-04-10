import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
})
export class AccountDetailsComponent {
  constructor(private router: Router) {}

   onContinue() {
     this.router.navigate(['/personal-details']);
   }
}
