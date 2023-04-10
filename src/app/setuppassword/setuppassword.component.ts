import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setuppassword',
  templateUrl: './setuppassword.component.html',
  styleUrls: ['./setuppassword.component.scss']
})
export class SetuppasswordComponent {
  constructor (private router: Router) {

  }
  onContinue() {
    this.router.navigate(['/login']);
  }
}
