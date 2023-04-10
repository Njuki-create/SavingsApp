import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  constructor (private router: Router) {

  }
  oncontinue() {
    this.router.navigate(['/email-verification']);
  }
}
